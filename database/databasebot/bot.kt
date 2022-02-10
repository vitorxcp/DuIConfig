package me.dinosparkour

import me.dinosparkour.commands.Registry
import me.dinosparkour.managers.ConfigManager
import me.dinosparkour.managers.DatabaseManager
import me.dinosparkour.managers.EventManager
import net.dv8tion.jda.core.AccountType
import net.dv8tion.jda.core.JDABuilder
import net.dv8tion.jda.core.entities.Game
import javax.security.auth.login.LoginException
import kotlin.system.exitProcess

fun main(args: Array<String>) {
    var config: Map<Any, String>? = null

    if (args.size < ConfigManager.REQUIRED_ARGS) {
        if (System.getProperty("config").toBoolean()) {
            config = ConfigManager.read()
        } else {
            println("""
            |Invalid argument amount!
            |Expected: [${ConfigManager.REQUIRED_ARGS}] | Received: [${args.size}]
            """.trimMargin())
            exitProcess(ExitStatus.INSUFFICIENT_ARGS.code)
        }
    }
    config = config ?: ConfigManager(args).get()

    DatabaseManager.initialize(config.filter { it.key in DatabaseAuth.keys() })
    Registry().loadCommands()
    connect(config["token"]!!)
}

private fun connect(token: String) {
    try {
        JDABuilder(AccountType.BOT)
                .addListener(EventManager())
                .setBulkDeleteSplittingEnabled(false)
                .setGame(Game.of("Thrones")) // pun xd
                .setToken(token)
                .buildBlocking()
    } catch (ex: LoginException) {
        System.err.println(ex.message)
        exitProcess(ExitStatus.INVALID_TOKEN.code)
    }
}

enum class ExitStatus(val code: Int) {
    // Nao error
    UPDATE(10),
    SHUTDOWN(11),
    RESTART(12),
    NEW_CONFIG(13),

    // Error
    INVALID_TOKEN(20),
    CONFIG_MISSING(21),
    INSUFFICIENT_ARGS(22),

    // SQL
    SQL_ACCESS_DENIED(30),
    SQL_INVALID_PASSWORD(31),
    SQL_UNKNOWN_HOST(32),
    SQL_UNKNOWN_DATABASE(33)
}