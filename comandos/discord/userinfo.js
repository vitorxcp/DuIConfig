exports.run = async (bot,message,args) => {
const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');
const db = require("quick.db")
		let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
       user = message.author
          if(!args[0]) user = message.author
            argstodos = args[0]
            args0 = "n"
          args1 = "n"
          args2 = "n"
          args3 = "n"
          args4 = "n"
          if(args[0]) args0 = "s"
          if(args[1]) args1 = "s"
          if(args[2]) args2 = "s"
          if(args[3]) args3 = "s"
          if(args[4]) args4 = "s"
          argsneee = args0+"/"+args1+"/"+args2+"/"+args3+"/"+args4
          if(argsneee === "s/n/n/n/n") argstodos = args[0]
          if(argsneee === "s/s/n/n/n") argstodos = args[0]+" "+args[1]
          if(argsneee === "s/s/s/n/n") argstodos = args[0]+" "+args[1]+" "+args[2]
          if(argsneee === "s/s/s/s/n") argstodos = args[0]+" "+args[1]+" "+args[2]+" "+args[3]
          if(argsneee === "s/s/s/s/s") argstodos = args[0]+" "+args[1]+" "+args[2]+" "+args[3]+" "+args[4]
          if(args[0]) user = message.mentions.users.first() || bot.users.cache.get(args[0]) || bot.users.cache.find(a => a.username === args[0]) || bot.users.cache.find(a => a.username === argstodos)
          if(!user) return message.quote("<@"+message.author+">, Vish, eu acho que `"+argstodos+"` não existe ou eu ainda não o conheci, mais tente menciona-lo, vai que eu acabe achando ele por ai!")
          nome = user.username
          tag = user.tag
          avatar = user.avatarURL()
          conta = "**<t:"+moment(user.createdAt).format('X')+"> (<t:"+moment(user.createdAt).format('X')+":R>).**"
          flags = bot.users.cache.get(user.id).flags
          if(flags) flags = bot.users.cache.get(user.id).flags.bitfield
          flags_hypesquad = ""
          flags_events = ""
          flags_developer = ""
          if(flags === 64) flags_hypesquad = "<:HypeSquad_Bravery:904080811442196520>"
          if(flags === 128) flags_hypesquad = "<:HypeSquad_Brilliance:904080698032418906>"
          if(flags === 256) flags_hypesquad = "<:HypeSquad_Balance:904080393995685889>"
          if(flags === 4) flags_events = "<:HypeSquad_Events:904088247410495539>"
          if(flags === 131072) flags_developer = "<:Discord_Developer:904088151239307355>"
          if(user.id === "518862457876250625" || user.id === "723130268428533830") flags_developer = "<:Discord_Developer:904088151239307355>"
          flags_amigo = ""
          //<a:emoji_9:806835291826290688>
          if(bot.guilds.cache.get("550057159774437386").member(user)) if(bot.guilds.cache.get("550057159774437386").members.cache.get(user.id).roles.cache.get("571771116142723078")) flags_amigo = "<a:emoji_9:806835291826290688>"
          stats = {
             online: "<:online:777980445644029974>",
              idle: "<:ausente:777980351804211230>",
               dnd: "<:ocupado:777980290726887436>",
                offline:"<:off:777980398780153906>"
                 }   
                  bot_stats = user.bot ? '<:bot:744026200854364303>' : ''
                  server = "<a:Discord:904088030829228052>"
                  if(bot.guilds.cache.get("550057159774437386").members.cache.get(user.id) === undefined) server = ""
                 status_stats = ""+stats[user.presence.status]+""+flags_events+""+server+""+flags_hypesquad+""+bot_stats+""+flags_developer+""+flags_amigo
const member = message.guild.member(user)
const Database = require("@replit/database")
const db = new Database()
voteuser = await db.get("topgg_"+user.id+"_vote")
if(!voteuser) voteuser = 0
votesattususer = "**`"+user.username+"` já votou `"+voteuser+"` vezes em mim! 🤩**"
if(voteuser === 0) votesattususer = "**`"+user.username+"` nunca votou em mim! 😥**"
if(!member){
embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setThumbnail(avatar)
.setTitle("**"+status_stats+" - Informações do(a) `"+nome+"`.**")
 .addField("**Discord Tag:**", "** `"+tag+"`.**", true)
 .addField("**ID:**", "** `"+user.id+"`.**", true)
 .addField("**Conta Criada:**", conta, false)
 .addField("**Entro No Servidor:**", "> **Não Está no Servidor.**", false)
 .addField("**Cargos No Servidor:**", "> **Não Está no Servidor.**", true)
  .addField("**Votação no Top.gg:**", votesattususer)
message.reply(embed)
} else {
  serveruser = "**<t:"+moment(member.joinedAt).format('X')+"> (<t:"+moment(member.joinedAt).format('X')+":R>).**"
embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setThumbnail(avatar)
.setTitle("**"+status_stats+" - Informações do(a) `"+nome+"`.**")
 .addField("**Discord Tag:**", "** `"+tag+"`.**", true)
 .addField("**ID:**", "** `"+user.id+"`.**", true)
 .addField("**Conta Criada:**", conta, false)
 .addField("**Entro No Servidor:**", serveruser, false)
 .addField("**Cargos No Servidor:**", "** `"+((member.roles.cache.size -1))+"` Cargos.**", true)
  if(message.guild.member(user).nickname){
   embed.addField("**Nickname no Servidor:**", "**`"+message.guild.member(user).nickname+"`.**", true)
 }
   embed.addField("**Votação no Top.gg:**", votesattususer)
message.reply(embed)
}
          if(user === message.author){
          } else {

          }
      	} catch (err) {
	error = new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setTitle("**Falha ao Executar o Comando.**")
.setDescription("> **O comando `"+(command.slice("t!"))+"` deu erro interno!** \n \n **Querendo denunciar o erro? Entre no meu [Servidor de Suporte](https://discord.gg/w6uZyBu) e denuncie no chat `#bugs`, se possível com prints!** \n\n```js\n"+err+"\n```")
console.log(err)
message.quote("<@"+message.author+">", error)
}
}
exports.help = {
name: "userinfo",
aliases: ["user"]
}