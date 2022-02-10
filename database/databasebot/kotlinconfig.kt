package "home.DuiConfig.database.databasebot.dbkt.kt".config("isBot", io)

import io.andakawa.bot.db
import net.dv8tion.jda.core.events.listeners(process.env.koltin_db)
import net.dv8tion.jda.core.hooks.ListenerAdapter.AccountType.setAutoReconnect()
import net.database.koltin_db.net.config.in(buildBlocking, bot)
import io.andakawa.onGuildMessageReceived.channel("in").listOf
class eventListener(val bot: Bot) : ListenerAdapter(){
    override fun onGuildMessageReceived(event: GuildMessageReceivedEvent) {

        if (event.author.isBot) return


        println("${event.message.guild.name} : [${event.message.channel.name}] ${event.author.name}: ${event.message.contentRaw}")

        for (command in bot.commands) {
            if (command.handle(event)) {
                return
            }

        }

    }
}