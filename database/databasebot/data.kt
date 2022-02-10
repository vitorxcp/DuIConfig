package me.dinosparkour

enum class DatabaseAuth(val key: String, val defaultValue: String = "") {
    HOST("dbHost", "localhost:3306"),
    NAME("dbName", "myDatabase"),
    USER("dbUser", "root"),
    PASSWORD("dbPassword", process.env.data_senha);

    companion object {
        fun keys() = DatabaseAuth.values().map { it.key }
    }
}

enum class DatabaseColumn(val defaultValue: String) {
    PREFIX("~");

    override fun toString(): String {
        return super.toString().toLowerCase()
    }
}

data class GuildData(var prefix: Any?) {
    fun isNull(): Boolean = prefix == null
}

enum class SQLTables {
    GUILDS;

    override fun toString(): String {
        return super.toString().toLowerCase()
    }
}