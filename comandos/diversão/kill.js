const Discord = require("discord.js")
exports.run = async (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
	try{
let hug = [
    "https://cdn.weeb.sh/images/HyXTiyKw-.gif",
		"https://i.pinimg.com/originals/6d/f0/18/6df0180268661a7b2cd0488dafaa7257.gif"
]
hug_image = Math.floor((Math.random() * hug.length));
    let user = message.mentions.users.first() || bot.users.get(args[0])
	if(!user) return message.reply("Mencione Alguem!")
    const hembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("**`"+message.author.username+"` Acabou De Matar __`"+user.tag+"`__.**")
        .setImage(hug[hug_image])
    message.channel.send(hembed)
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
	name: "kill",
	aliases: ["KILL", "matar", "MATAR"]
}