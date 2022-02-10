package io.duiconfig.bot
import "home.DuiConfig.database.databasebot.kotlinconfig.kt".val(io)
import io.duiconfig.bot.commands.utils.db
import io.duiconfig.bot.listeners.eventListener
import net.dv8tion.jda.core.AccountType
import net.dv8tion.jda.core.JDABuilder

class Bot(val token: String) {
    val commands = listOf (
            Ping()
    )

    fun start() {
      //  println("${bot.ws.config}\n")

        val builder = JDABuilder(AccountType.BOT)
                .setToken(token)
                .setAutoReconnect(true)
                .addEventListener(eventListener(this))

        val jda = builder.buildBlocking()
    }
}