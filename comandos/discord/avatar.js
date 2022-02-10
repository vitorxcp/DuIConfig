const Discord = require("discord.js")
 const disbut = require("discord.js-buttons");
exports.run = (bot, message, args, prefix2) => {
	try{	
 role_color = "BLUE"
	    let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
	let avatar = user.displayAvatarURL({ dynamic: true, size: 2048 }) || "https://cdn.discordapp.com/embed/avatars/1.png"
	var embed = new Discord.MessageEmbed()
	.setColor(role_color)
	.setTimestamp()
	.setTitle("**Avatar Do(a) `"+user.username+"`:**")
	//.setDescription("**[__link__]("+avatar+") Do Avatar...**")
	.setImage(avatar)
   let botton = new disbut.MessageButton()
  .setStyle('url')
  .setURL(avatar)   
  .setLabel('Link');
message.channel.send("<@"+message.author+">", {
   buttons: [botton], embed: embed
})
	} catch (err) {
				let messageArray = message.content.split(" ");
    let command = messageArray[0];
	error = new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setTitle("**Falha ao Executar o Comando.**")
.setDescription("> **O comando `"+(prefix2+command.slice(prefix2.length))+"` deu erro interno!** \n \n **Querendo denunciar o erro? Entre no meu [Servidor de Suporte](https://discord.gg/w6uZyBu) e denuncie no chat `#bugs`, se possível com prints!** \n\n```js\n"+err+"\n```")
message.quote("<@"+message.author+">", error)
}
}
exports.help = {
	name: "avatar",
	aliases: ["imagem", "AVATAR", "IMAGEM"]
}