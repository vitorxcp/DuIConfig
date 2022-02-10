discord = require("discord.js")
db = require("quick.db")
exports.run = async (bot,message,args, prefix2) => {
		try{
      const firebase = require("firebase")
      const database = firebase.database();
        let messageArray = message.content.split(" ");
    let command = messageArray[0];
    if(!args[0]){
        embed = new discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setAuthor("Clique aqui para ver todos meus comandos!", bot.user.avatarURL(), "https://duiconfig.glitch.me/comandos")
  .setTitle("**`"+(prefix2+command.slice(prefix2.length))+"`**")
  .setDescription("Coloquei um Sobre Mim elegante e chamativo para o `"+prefix2+"perfil`.\n\n**Como Usar?** `"+(prefix2+command.slice(prefix2.length))+" `**`< texto >`**")
  .addField("Exemplos:", "** • Coloque uma mensagem top!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`Sou amiguinho do Duizin ;3`**")
  .addField("Permissões:", "No caso para esta interação não precisaremos de permissões!")
  .addField("Sinônimos:", "`"+prefix2+"sobremim`, `"+prefix2+"aboutme`.")
message.quote("<@"+message.author+">", embed)
  return;
}
sobre_antes1 = await database.ref("DuiConfig/Perfil/About/"+message.author.id).once('value')
      sobre_antes = sobre_antes1.val()
      if(sobre_antes) sobre_antes = sobre_antes1.val().texto
if(sobre_antes === null | sobre_antes === "null") sobre_antes = "Sou Amiguinho Do DuiConfig! \n > Para mudar use `"+prefix2+"sobremim`!"
setTimeout(() => {
  database.ref("DuiConfig/Perfil/About/"+message.author.id).update({texto: args.join(" ")})
embed = new discord.MessageEmbed()
.setColor("BLUE")
.setTitle("> Descrição alterada com Sucesso! [✅]")
  .addField("Antes:", "```"+sobre_antes+"```")
  .addField("Depois:", "```"+args.join(" ")+"```")
.setTimestamp()
message.reply("", embed)
}, 500)
	} catch (err) {
				let messageArray = message.content.split(" ");
    let command = messageArray[0];
	error = new discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setTitle("**Falha ao Executar o Comando.**")
.setDescription("> **O comando `"+(prefix2+command.slice(prefix2.length))+"` deu erro interno!** \n \n **Querendo denunciar o erro? Entre no meu [Servidor de Suporte](https://discord.gg/w6uZyBu) e denuncie no chat `#bugs`, se possível com prints!** \n\n```js\n"+err+"\n```")
message.quote("<@"+message.author+">", error)
}
}
exports.help = {
name: "about-me",
aliases: ["sobre-mim", "sobremim", "aboutme"]
}