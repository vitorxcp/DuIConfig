const discord = require("discord.js")
exports.run = (bot,message,args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
role_color = "BLUE"
if(!args[0]){
		let messageArray = message.content.split(" ");
    let command = messageArray[0];
		var mebed = new discord.MessageEmbed()
		.setColor("#123456")
		.setTimestamp()
		.setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
		.setDescription("**Topico Desanimado? Mude-o!**")
		.addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" <chat | id> <topico>`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" execute comandos aqui`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" <messagem>`.**")
		.addField("**Permissões:**", "**-> Para Executar Este Comando Precisará Da Permissão `MANAGE_MESSAGES`!**")
		.addField("**Sinonimos:**", "**-> `"+prefix2+"topico` | `"+prefix2+"topic` | `"+prefix2+"settopic` | `"+prefix2+"settopico` | `"+prefix2+"mudartopico`.**")
		message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
	} 
		if(args[0]){
			try{
				 if (!message.member.hasPermission("MANAGE_CHANNELS", false, true, true)) {
        message.reply("**Desculpe você não possui permissão de `MANAGE_CHANNELS` para usar esse comando!**");
        return 0;
    }
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS", false, true, true)) {
        message.reply("**Não tenho permissão para alterar o tópico desse chat!**");
        return 0;
    }
			let chat = bot.channels.cache.get(args[0]) || message.mentions.channels.first() || message.channel
				let chat2 = bot.channels.cache.get(args[0]) || message.mentions.channels.first() 
			let a = chat.topic
			if (a === null) a = "Nenhum..."
		let msg = args.join(" ")
		let a3 = chat2+" "+msg
		if(a3 === ""+chat2+" "+msg+"") msg = args.slice(1).join(" ")
		if(chat2 === undefined) msg = args.join(" ")
	var embed = new discord.MessageEmbed()
	.setColor("GREEN")
	.setTitle("** Topico Do `"+chat.name+"` Mudado!**")
	.setDescription("** Antigo Topico:** \n ```\n"+a+"\n``` \n **Novo Topico:** \n ```\n"+msg+"\n```" )
	//.setFooter(chat2)
	.setTimestamp()
	chat.setTopic(msg).then(() => {
			message.channel.send(message.author, embed).catch(err => {
	var embed1 = new discord.MessageEmbed()
	.setColor("RED")
	.setTmestamp()
	.setTitle("ERRO!")
	.setDescription("**Ops! Parece que eu atingi meu maximo de requires, e não consegui mudar o Topico!**")
message.channel.send(message.author, embed2)
console.error(err)

});
	}).catch(err => {
	var embed1 = new discord.MessageEmbed()
	.setColor("RED")
	.setTmestamp()
	.setTitle("ERRO!")
	.setDescription("**Ops! Parece que eu atingi meu maximo de requires, e não consegui mudar o Topico!**")
message.channel.send(message.author, embed2)
console.error(err)

});

		}catch(err) {
	var embed1 = new discord.MessageEmbed()
	.setColor("RED")
	.setTmestamp()
	.setTitle("ERRO!")
	.setDescription("**Ops! Parece que eu atingi meu maximo de requires, e não consegui mudar o Topico!**")
message.channel.send(message.author, embed2)
console.error(err)

};
		}
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
	name: "settopico", aliases: ["settopico", "topico", "topic", "mudartopico", "SETTOPIC", "SETTOPICO", "TOPIC", "TOPICO", "MUDARTOPICO", "settopic"]
}