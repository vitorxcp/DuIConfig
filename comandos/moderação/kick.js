exports.run = async(bot,message,args,prefix2) => {
  	let messageArray = message.content.split(" ");
  let command = messageArray[0];
    bot.userkickguild = false
const Discord = require("discord.js")
if(!args[0]){
  embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setAuthor("Clique aqui para ver todos meus comandos!", "https://cdn.discordapp.com/avatars/777936158638342175/91b0d82f3fd17bf1a81387079ddc0ddc.webp?size=2048", "https://duiconfig.glitch.me/comandos")
  .setTitle("**`"+(prefix2+command.slice(prefix2.length))+"`**")
  .setDescription("Vendo algo errado? Retire o usuario do servidor para ele saber que esta fazendo algo de errado!\n\n**Como Usar?** `"+(prefix2+command.slice(prefix2.length))+" `**`< usuario | id > [ motivo ]`**")
  .addField("Exemplos:", "** • Retire um usuario pela menção!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`@"+bot.user.username+" Acabou fazendo algo errado e foi retirado do servidor!`**\n** • Retire um usuario pelo ID!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`"+bot.user.id+" Acabou fazendo algo errado e foi retirado do servidor!`**")
  .addField("Permissões:", "Você precissará da permissão `Expulsar membros`!\n Eu precisarei da permissão `Expulsar membros`, para eu executar o comando!")
  .addField("Sinônimos:", "`"+prefix2+"kick`, `"+prefix2+"kickar`, `"+prefix2+"tirar`, `"+prefix2+"retirar`.")
message.quote("<@"+message.author+">", embed)
  return;
}
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Putz cara, acabei de verficar aqui, e você não tem a permissão `Expulsar membros`...")
if(!message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))) return message.quote("<@"+message.author+">, Ops, pelo visto este usuario não esta no servidor, então eu não consigo expulsar ele!")
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
reason = args.slice(1).join(' ')
if(!reason) return message.reply("Ops, me forneça um motivo para o expulsar!")
message.reply("Você deseja expulsar ele mesmo? Depois você terá que enviar novamente um convite para ele entrar!").then(msg => {
  msg.react("👍")
  msg.react("❌")
   const bora = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;
        const bora1 = msg.createReactionCollector(bora, { time: 240000 })
        bora1.on('collect', async bot => {
          bot.userkickguild = false
       user.kick({reason:  reason}).catch(e => {
msg.delete()
 message.reply("Verifique se eu tenho as permissões `Expulsar membros` ou veja se eu estou acima do usuario que deseja retirar do servidor!")
bot.userkickguild = true
})
    setTimeout(() => {
if(bot.userkickguild === false){
  msg.delete()
  message.quote("<@"+message.author+">, Ok!`"+user.user.username+"` Acabou de ser retirado do servidor!")
}
      }, 1000)
        })
   const n = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        const n1 = msg.createReactionCollector(n, { time: 240000 })
        n1.on('collect', async bot => {
       msg.delete()
       message.quote("<@"+message.author+">, Agora eu não irei mais retirar ele do servidor!")
        })
})
}
exports.help = {name: "kick", aliases: ["kickar", "tirar", "retirar"]}