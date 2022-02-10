const discord = require("discord.js")
exports.run = (bot, message, args, prefix2) => {
  const moment = require("moment")
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
let tag = message.mentions.roles.first()
if(!tag) tag = bot.guilds.cache.get(message.guild.id).roles.cache.get(args[0])
if(tag === undefined) return message.reply("Ops, Eu Não Achei Este Cargo, Tente Mecionar!")
    const diasdasemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
    const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const diadasemana = diasdasemana[tag.createdAt.getDay()];
    const dia = tag.createdAt.getDate();
    const mess = mes[tag.createdAt.getMonth()];
    const ano = tag.createdAt.getFullYear();
    const hora = tag.createdAt.getHours();
    const minutos = tag.createdAt.getMinutes();
		bots = tag.members.filter(m => m.user.bot).size.toLocaleString()
				total = (tag.members.size - tag.members.filter(m => m.user.bot).size).toLocaleString()

let exibir = tag.hoist
if(exibir === false) exibir = "Não"
if(exibir === true) exibir = "Sim"
let bot2 = tag.managed
if(bot2 === false) bot2 = "Não"
if(bot2 === true) bot2 = "Sim"
let menti = tag.mentionable
if(menti === true) menti = "Sim"
if(menti === false) menti = "Não" 
var embed = new discord.MessageEmbed()
.setColor(tag.color ? tag.color : "")
.setTimestamp()
.setTitle("> **Informações Do Cargo `"+tag.name+"`.**")
.addField("**Menção:**", "**`<@&"+tag.id+">`.**", true)
.addField("**ID:**", "**`"+tag.id+"`.**", true)
.addField("**Cargo Criado:**", "**<t:"+moment(tag.createdAt).format('X')+"> (<t:"+moment(tag.createdAt).format('X')+":R>).**")
.addField("**Exibe Separadamente:**", "**`"+exibir+"`.**", true)
.addField("**E De Um Bot:**", "**`"+bot2+"`.**", true)
.addField("**Mencionável:**", "**`"+menti+"`.**", true)
.addField("**Membros:**", "**`"+total+"`.**", true)
.addField("**Bots:**", "**`"+bots+"`.**", true)
.addField("**Posição:**", "**`"+tag.position+"`.**", true)
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
	name: "taginfo",
	aliases: []
}