discord = require("discord.js")
db = require("quick.db")
exports.run = async (bot, message, args, prefix2) => {
					let messageArray = message.content.split(" ");
    let command = messageArray[0];
	if(!args[0]){
		var mebed = new Discord.MessageEmbed()
		.setColor("#123456")
		.setTimestamp()
		.setTitle("**Informação Do Comando ``"+prefix2+""+command.slice(prefix2.length)+"``:**")
		.setDescription("**Veja Os Avisos Dos Usuarios!**")
		.addField("**Como Usar?**", "**-> ``"+prefix2+""+command.slice(prefix2.length)+" @DuiConfig``.** \n **-> ``"+prefix2+""+command.slice(prefix2.length)+" 552086755956883456``.** ")
		.addField("**Permissões:**", "**-> ``Nenhuma``!**")
		.addField("**Sinonimos:**", "**-> ``"+prefix2+"warnlist`` | ``"+prefix2+"warns`` | ``"+prefix2+"listadeavisos`` | ``"+prefix2+"infractions`` | ``"+prefix2+"modlog`` | ``"+prefix2+"modlogs`` | ``"+prefix2+"avisos``.**")
		message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
return;
}
    //username2 = message.mentions.users.first().username || message.guild.members.get(args[0]).user.username
		if(message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])).user === null) return message.reply("Usuario Não Encontrado, Tente Mencionar Ele!")
user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])).user
	  if(!user) return message.reply("Usuario Não Encontrado, Tente Mencionar Ele!")
warn = db.fetch("guild22_"+message.guild.id+".warn22_"+user.id)
if(warn === undefined) return message.reply("**O ``"+(user.username)+"`` Não Tem Avisos!**")
if(warn === null) return message.reply("**O ``"+(user.username)+"`` Não Tem Avisos!**")
embed = new discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setTitle("**Avisos de ``"+(user.username)+"``:**")
.setDescription(warn)
message.channel.send(message.author, embed)
}
exports.help = {
name: "warnlist",
aliases: ["listadeavisos", "modlog", "moblogs", "infractions", "warns", "LISTADEAVISO", "MODLOG", "MODLOGS", "WARNS", "WARNLIST", "INFRACTION", "avisos", "AVISOS"]
}