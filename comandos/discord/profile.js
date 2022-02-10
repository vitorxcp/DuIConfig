discord = require("discord.js")
db = require("quick.db")
const Database = require("@replit/database")
const dbdc = new Database()
const firebase = require("firebase")
const database = firebase.database();
exports.run = async (bot,message,args,prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
	 message.channel.startTyping();
	all = true
	user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
	 database.ref(`DuiConfig/Levels/${message.guild.id}/${user.id}`)
          .once('value').then(async function(db3){
              if (db3.val() == null) {
   database.ref(`DuiConfig/Levels/${message.guild.id}/${user.id}`).set({xp: 0, level: 0})
 }
})
setTimeout( async () => {
 db3 = await database.ref(`DuiConfig/Levels/${message.guild.id}/${user.id}`).once('value')
level = db3.val().level.toLocaleString() - 1
if(level === -1) level = 0
xp = db3.val().xp.toLocaleString()
    let staus = { online: "<:online:777980445644029974>", idle: "<:ausente:777980351804211230>", dnd: "<:ocupado:777980290726887436>", offline:"<:off:777980398780153906>"}   
let status = staus[user.presence.status]
sobre1 = await database.ref("DuiConfig/Perfil/About/"+message.author.id).once('value')
  sobre = sobre1.val()
    if(sobre) sobre = sobre1.val().texto
if(sobre === null | sobre === "null") sobre = "Sou Amiguinho Do DuiConfig! \n > Para mudar use `"+prefix2+"sobremim`!"
if([bot.user.id].includes(user.id)) sobre = "Sou DuiConfig, apenas um bot fofo para o Discord!"
msg = await dbdc.get("guilda_"+message.guild.id+"_msg_"+user.id+"")
				if(msg === null) msg = "0"
				color = db.fetch("color_"+user.id)
				if(color === null) color = "BLACK" 
dev = ""
if(["518862457876250625"].includes(user.id)) dev = "<:dev:801574870386999336>"
afk = ""
if(db.fetch("afk_"+user.id) === "AFK") afk = "😴"
anel = ""
if(db.fetch("marry_sim_"+user.id) === "marry") anel = "💍"
tise = user.bot ? '<:bot:744026200854364303>' : ''
server = ""
if(bot.guilds.cache.get("550057159774437386").members.cache.get(user.id)) server = "<:Suport_Server:802568500156825651>"
if(bot.guilds.cache.get("550057159774437386").members.cache.get(user.id) === undefined) server = ""
emojis = status+""+afk+""+dev+""+tise+""+anel+""+server
casado = bot.users.cache.get(db.fetch("marry_"+user.id))
if(!casado) casado = ""
if(casado) casado = bot.users.cache.get(db.fetch("marry_"+user.id)).tag
if(db.fetch("marry_sim_"+user.id) === "marry") {
embed = new discord.MessageEmbed()
.setColor(color)
.setTimestamp()
.setThumbnail(user.avatarURL())
.setTitle("** "+emojis+" - Perfil de `"+user.username+"`.**")
.addField("**Sobre:**", sobre, all)
.addField("**Casado(a) Com:**", "**`"+casado+"`.**", all)
.addField("**Level:**", "**Nivel: `"+level+"`.** \n **XP: `"+xp+"`.**", false)
 message.channel.stopTyping();
return message.quote("<@"+message.author+">", embed)
}
embed = new discord.MessageEmbed()
.setColor(color)
.setTimestamp()
.setThumbnail(user.avatarURL())
.setTitle("** "+emojis+" - Perfil de `"+user.username+"`.**")
.addField("**Sobre:**", sobre, all)
.addField("**Level:**", "**Nivel: `"+level+"`.** \n **XP: `"+xp+"`.**", all)

message.quote("<@"+message.author+">", embed)
 message.channel.stopTyping();
}, 500)
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
	name: "profile",
	aliases: ["perfil"]
}