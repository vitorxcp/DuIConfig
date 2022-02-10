package me.dinosparkour.utils

import net.dv8tion.jda.core.MessageBuilder
import net.dv8tion.jda.core.entities.ChannelType
import net.dv8tion.jda.core.entities.Message
import net.dv8tion.jda.core.entities.MessageEmbed
import net.dv8tion.jda.core.events.message.MessageReceivedEvent
import java.util.function.Consumer

class ChatUtil(val e: MessageReceivedEvent) {

    fun reply(msg: Message, success: Consumer<Message>? = null) {
        if (!e.isFromType(ChannelType.TEXT) || e.textChannel.canTalk()) {
            e.channel.sendMessage(stripEveryoneHere(msg)).queue(success)
        }
    }

    fun reply(embed: MessageEmbed, success: Consumer<Message>? = null) {
        reply(build(embed), success)
    }

    fun reply(text: String, success: Consumer<Message>? = null) {
        reply(build(text), success)
    }

    companion object {
        fun edit(msg: Message, newContent: String) {
            if (!msg.isFromType(ChannelType.TEXT) || msg.textChannel.canTalk()) {
                msg.editMessage(newContent).queue()
            }
        }

        fun build(o: Any): Message
                = MessageBuilder().append(o).build()

        fun stripEveryoneHere(text: String): String
                = text.replace("@here", "@\u180Ehere")
                .replace("@everyone", "@\u180Eeveryone")

        fun stripEveryoneHere(msg: Message): Message
                = build(stripEveryoneHere(msg.rawContent))

        fun stripFormatting(text: String): String
                = text.replace("@", "\\@")
                .replace("~~", "\\~\\~")
                .replace("*", "\\*")
                .replace("`", "\\`")
                .replace("_", "\\_")
    }
}