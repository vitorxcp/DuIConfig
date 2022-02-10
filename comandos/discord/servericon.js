const Discord = require("discord.js")
exports.run = (bot, message,args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
			try{
 role_color = "BLUE"
	let servidor = bot.guilds.cache.get(args[0]) || message.guild
	let icon = servidor.iconURL()
	let server = servidor.name
	var embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setTitle("**Imagem Do Servidor `"+server+"`:**")
.setDescription("**[__Link__]("+icon+") Da Imagem...**")
.setImage(icon)
message.channel.send(embed)
	} catch (err) {
	error = new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setTitle("**Falha ao Executar o Comando.**")
.setDescription("> **O comando `"+(prefix2+command.slice(prefix2.length))+"` deu erro interno!** \n \n **Querendo denunciar o erro? Entre no meu [Servidor de Suporte](https://discord.gg/w6uZyBu) e denuncie no chat `#bugs`, se possível com prints!** \n\n```js\n"+err+"\n```")
message.quote("<@"+message.author+">", error)
}
}
exports.help = {
	name: "servericon",
	aliases: ["server-icon", "SERVERICON", "SERVER-ICON"]
}