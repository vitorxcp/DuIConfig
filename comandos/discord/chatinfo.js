const Discord = require("discord.js")
exports.run = (bot, message, args, prefix2) => {
			try{
          let chat = message.mentions.channels.first() || bot.channels.cache.get(args[0]) || message.channel
role_color = "BLUE"
const moment = require("moment")
let epic = "\n "+chat.topic
let nsfw2 = chat.nsfw
if(nsfw2 === true) nsfw2 = "\n **-> NSFW: `Sim`.**"
if(nsfw2 === false) nsfw2 = "\n **-> NSFW: `Não`.**"
if(chat.topic === null) epic = "\n **`Sem Topico...`**"
let hm = chat.type
if(hm === "voice") epic = ""
if(hm === "category") epic = ""
if(hm === "voice") nsfw2 = ""
if(hm === "category") nsfw2 = ""
if(hm === "text") hm = "Texto"
if(hm === "voice") {
	if(hm === "category")hm = "Categoria"
if(hm === "news")hm = "Novidades"
let limite = chat.members.size+"/"+chat.userLimit
if(limite === chat.members.size+"/0") limite = "Sem Limite"
var embed = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("**Informações Do Canal ``"+chat.name+"``:**")
.addField("**ID**", "**`"+chat.id+"`.**",true)
.addField("**Menção**", "**`<#"+chat.id+">`.**",true)
.addField("**Posição**", "**`"+chat.position+"`.**",true)
.addField("**Criado**", "**<t:"+moment(chat.createdAt).format('X')+"> (<t:"+moment(chat.createdAt).format('X')+":R>).**",false)
.addField("**Canal de**", "**`Voz`.**",true)
.addField("**Limite**", "**`"+limite+"`.**",true)
.addField("**Membros**", "**`"+chat.members.size+"`.**",true)
.addField("**Da Categoria**", "**`"+chat.parent.name+"`.**",true)
message.channel.send(embed)
return;
}
if(hm === "category")hm = "Categoria"
if(hm === "news")hm = "Novidades"
if(!chat.lastMessage) ultimamsg = "\n **`Ninguem`.**"
if(chat.lastMessage) ultimamsg = '\n **<@'+chat.lastMessage.author+">.**"
var embed = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("**Informações Do Canal ``"+chat.name+"``:**")
.addField("**ID**", "**`"+chat.id+"`.**",true)
.addField("**Menção**", "**`<#"+chat.id+">`.**",true)
.addField("**Posição**", "**`"+chat.position+"`.**",true)
.addField("**Criado**", "**<t:"+moment(chat.createdAt).format('X')+"> (<t:"+moment(chat.createdAt).format('X')+":R>).**",false)
.addField("**Canal de**", "**`"+hm+"`.**",true)
.addField("**Topico**", epic,true)
.addField("**Da Categoria**", "**`"+chat.parent.name+"`.**",true)
        .addField("**Ultima mensagem enviada por**", ultimamsg,false)
message.channel.send(embed)
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
name: "chatinfo",
aliases: ["canalinfo", "chat-info", "canal-info", "chat", "canal", "CHATINFo", "CANAL", "CHAT", "CHAT-INFO", "channelinfo"]
}