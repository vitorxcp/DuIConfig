package me.dinosparkour.commands.impl

import me.dinosparkour.DatabaseColumn
import me.dinosparkour.SQLTables
import me.dinosparkour.commands.Command
import me.dinosparkour.managers.ConfigManager
import me.dinosparkour.managers.DatabaseManager
import net.dv8tion.jda.core.Permission
import net.dv8tion.jda.core.events.message.MessageReceivedEvent

class PrefixCmd : Command(name = "prefix",
        description = "Modifies the current guild's prefix",
        allowPrivate = false,
        requiredPermissions = arrayOf(Permission.ADMINISTRATOR),
        botRequiresPermissions = false) {

    override fun execute(args: List<String>, e: MessageReceivedEvent) {
        val dbManager = DatabaseManager(e.guild)
        if (args.isEmpty()) {
            e.reply("**${dbManager.getPrefixFormatted(e.jda)}**")
            return
        }

        var newPrefix = args.joinToString(" ")
                .replace("\\$$".toRegex(), "")

        if (newPrefix.matches("^<@!?${e.jda.selfUser.id}>$".toRegex())) {
            newPrefix = "%mention%"
        } else if (newPrefix.length > 32) {
            e.reply("`32`")
            return
        }

        val noEntry = dbManager.getData() == null
        val defaultPrefix = ConfigManager.getDefaultPrefix()
        val table = "${SQLTables.GUILDS}${if (noEntry) " (id, prefix)" else ""}"

        if (newPrefix in arrayOf("reset", defaultPrefix)) {
            if (!noEntry) {
                dbManager.deleteData(table, DatabaseColumn.PREFIX)
            }
            e.reply("Resetx to **$defaultPrefix**")
        } else {
            if (newPrefix != dbManager.getPrefix()) {
                dbManager.saveData(table, DatabaseColumn.PREFIX, newPrefix)
            }
            e.reply("Set **${dbManager.getPrefixFormatted(e.jda)}**")
        }
    }
}