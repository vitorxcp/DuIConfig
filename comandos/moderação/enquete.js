const Discord = require("discord.js")
exports.run = (bot, message, args, prefix2) => {
	let messageArray = message.content.split(" ");
    let command = messageArray[0];
if(!args[0]){
		var mebed = new Discord.MessageEmbed()
		.setColor("#123456")
		.setTimestamp()
		.setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
		.setDescription("**Querendo Fazer Uma Enquete/Votação No Seu Servidor? Use o DuiConfig Para Isso :3**")
		.addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" Querem sorteio de nitrin?`.**")
				.addField("**Permissões:**", "**-> Para Executar Este Comando Precisará Da Permissão `ADMINISTRATOR`!**")
		.addField("**Sinonimos:**", "**-> `"+prefix2+"enquete` | `"+prefix2+"votação`.**")
		message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
	}
	if(args[0]){
		if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
const anuncio = args.join(" ")
var embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp(Date.now)
.setTitle("**🎫 ┋ Enquete:**")
.setDescription(anuncio)
message.channel.send("@everyone / @here", embed).then(async msg => { await msg.react('👍'), await msg.react('👎')}) 
message.delete().catch(O_o => { });
}
}
exports.help = {
	name: "enquete",
	aliases: ["votação"]
}