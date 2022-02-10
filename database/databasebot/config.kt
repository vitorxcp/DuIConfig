package me.dinosparkour.managers

import me.dinosparkour.DatabaseAuth
import me.dinosparkour.DatabaseColumn
import me.dinosparkour.ExitStatus
import me.dinosparkour.GuildData
import me.dinosparkour.utils.ChatUtil
import net.dv8tion.jda.core.JDA
import net.dv8tion.jda.core.entities.Guild
import org.mariadb.jdbc.internal.util.dao.QueryException
import java.sql.*
import kotlin.system.exitProcess
import kotlin.system.measureTimeMillis

class DatabaseManager(guild: Guild) {

    private val id = guild.id.toLong()

    private fun Any?.addQuotes(): Any? = if (this is String) "'$this'" else this

    private fun insert(tableWithTypes: String, vararg values: Any?): Boolean {
        val v = values.map { it.addQuotes() }.joinToString()
        val statement = "INSERT INTO $tableWithTypes VALUES ($v)"
        return database.prepareStatement(statement).execute()
    }

    private fun update(table: String, key: Any, value: Any?): Boolean {
        val statement = "UPDATE $table SET $key = '$value' WHERE id = $id"
        return database.prepareStatement(statement).execute()
    }

    private fun delete(table: String): Boolean {
        val statement = "DELETE FROM $table WHERE id = $id"
        return database.prepareStatement(statement).execute()
    }

    private fun deleteRow(table: String): Boolean {
        guildData.remove(id)
        return delete(table)
    }

    fun deleteData(table: String, type: DatabaseColumn) {
        when (type) {
            DatabaseColumn.PREFIX -> getData()?.prefix = null
        }

        if (getData()?.isNull() ?: false) {
            deleteRow(table)
        }
    }

    fun saveData(table: String, type: DatabaseColumn, value: Any): Boolean {
        if (id in guildData) {
            when (type) {
                DatabaseColumn.PREFIX -> getData()?.prefix = value.toString()
            }
        } else {
            guildData.put(id, GuildData(value))
        }

        return if (' ' in table) {
            insert(table, id, value)
        } else {
            update(table, type, value)
        }
    }

    fun getData(): GuildData? = guildData[id]

    fun getPrefix(): String = getData()?.prefix?.toString() ?: ConfigManager.getDefaultPrefix()

    fun getPrefixFormatted(jda: JDA): String {
        return when (getPrefix()) {
            "%mention%" -> jda.selfUser.asMention
            ConfigManager.getDefaultPrefix() -> getPrefix() + " (default)"
            else -> ChatUtil.stripFormatting(getPrefix())
        }
    }

    companion object {
        private val URL = "jdbc:mariadb://%s/%s"
        private lateinit var database: Connection
        private val guildData = mutableMapOf<Long, GuildData>()

        private fun connect(map: Map<Any, String>) {
            print("Connecting to the database... ")
            val milli = measureTimeMillis {
                val url = URL.format(map[DatabaseAuth.HOST.key], map[DatabaseAuth.NAME.key])
                database = DriverManager.getConnection(url,
                        map[DatabaseAuth.USER.key], map[DatabaseAuth.PASSWORD.key])
            }
            println("Done! (${milli}ms)")
        }

        private fun readGuildData() {
            print("Loading all guild data... ")
            val milli = measureTimeMillis {
                val read = "SELECT * FROM guilds"
                val statement = database.prepareStatement(read)
                val result = statement.executeQuery()

                while (result.next()) {
                    guildData.put(result.getLong("id"), GuildData(result.getString("prefix") ?: continue))
                }
            }
            println("Done! (${milli}ms)")
        }

        fun initialize(map: Map<Any, String>) {
            try {
                connect(map)
                readGuildData()
            } catch (ex: QueryException) {
                System.err.println(ex.message)
                exitProcess(ExitStatus.SQL_ACCESS_DENIED.code)
            } catch (ex: SQLInvalidAuthorizationSpecException) {
                System.err.println(ex.message)
                exitProcess(ExitStatus.SQL_INVALID_PASSWORD.code)
            } catch (ex: SQLNonTransientConnectionException) {
                System.err.println(ex.message)
                exitProcess(ExitStatus.SQL_UNKNOWN_HOST.code)
            } catch (ex: SQLSyntaxErrorException) {
                System.err.println(ex.message)
                exitProcess(ExitStatus.SQL_UNKNOWN_DATABASE.code)
            }
        }
    }
}