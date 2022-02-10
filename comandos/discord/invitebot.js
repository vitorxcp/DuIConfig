const disbut = require("discord.js-buttons");
const Discord = require("discord.js")
exports.run = (bot, message, args, prefix2) => {
	try{			
    embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setTitle("> **Convites e Suporte.**")
  .setDescription("**- Me adicione no seu servidor e venha fazer parte da nossa comunidade! ;3**\n **- Vote em mim para me ajudar a crescer e juntos fazer um servidor melhor!**\n **- Entre no meu Servidor de Suporte para ficar dentro das novidades!**");
   let invite = new disbut.MessageButton()
  .setStyle('url')
  .setURL("https://discordapp.com/oauth2/authorize?client_id="+bot.user.id+"&permissions=193140321527&scope=bot")   
  .setLabel('Convite');
   let vote = new disbut.MessageButton()
  .setStyle('url')
  .setURL("https://top.gg/bot/"+bot.user.id+"/vote")
   .setLabel('Votar')  
 // .setDisabled();
   let suport = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/w6uZyBu')   
  .setLabel('Suporte');
message.channel.send("<@"+message.author+">", {
   buttons: [invite,vote,suport], embed: embed
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
name: "convite", 
aliases: ["invitebot", "invite-bot", "CONVITE", "INVITE", "INVITEBOT", "invite"]
}