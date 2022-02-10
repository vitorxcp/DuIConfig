package me.dinosparkour.managers

import me.dinosparkour.commands.Registry
import me.dinosparkour.utils.ChatUtil
import net.dv8tion.jda.core.entities.ChannelType
import net.dv8tion.jda.core.events.ReadyEvent
import net.dv8tion.jda.core.events.message.MessageReceivedEvent
import net.dv8tion.jda.core.hooks.ListenerAdapter

class EventManager : ListenerAdapter() {

    override fun onReady(e: ReadyEvent) {
        val selfUser = e.jda.selfUser
        println("""
        ||-========================================================
        || Prefix: ${ConfigManager.getDefaultPrefix()}
        ||-========================================================
        """.trimMargin("|"))
    }

    override fun onMessageReceived(e: MessageReceivedEvent) {
        val content = e.message.rawContent
        val selfId = e.jda.selfUser.id

        val db = DatabaseManager(e.guild)
        var prefix = db.getPrefix()
        if (prefix == "%mention%") {
            prefix = e.jda.selfUser.asMention
        }

        if (content.matches("^<@!?$selfId>$".toRegex())) {
            ChatUtil(e).reply("My prefix for this guild is: **${db.getPrefixFormatted(e.jda)}**")
            return
        }

        val isMentionPrefix = content.matches("^<@!?$selfId>\\s.*".toRegex())
        if (!isMentionPrefix && !content.startsWith(prefix, true))
            return

        prefix = if (isMentionPrefix) content.substring(0, content.indexOf('>') + 1) else prefix
        val index = if (isMentionPrefix) prefix.length + 1 else prefix.length

        val allArgs = content.substring(index).split("\\s+".toRegex())
        val command = Registry.getCommandByName(allArgs[0])
        val args = allArgs.drop(1)

        if (e.isFromType(ChannelType.PRIVATE) && command?.allowPrivate?.not() ?: return)
            return

        command?.execute(args, e)
    }
}