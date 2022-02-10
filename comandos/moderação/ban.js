exports.run = async(bot,message,args,prefix2) => {
  	let messageArray = message.content.split(" ");
  let command = messageArray[0];
    bot.userban_guild = false
const Discord = require("discord.js")
if(!args[0]){
  embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setAuthor("Clique aqui para ver todos meus comandos!", "https://cdn.discordapp.com/avatars/777936158638342175/91b0d82f3fd17bf1a81387079ddc0ddc.webp?size=2048", "https://duiconfig.glitch.me/comandos")
  .setTitle("**`"+(prefix2+command.slice(prefix2.length))+"`**")
  .setDescription("Bane um usuário do servidor, se ele estiver fazendo algo que e contra as regras do servidor ou do Discord!\n\n**Como Usar?** `"+(prefix2+command.slice(prefix2.length))+" `**`< usuario | id > [ motivo ]`**")
  .addField("Exemplos:", "** • Pune um usuario pela menção!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`@"+bot.user.username+" Quebrou as regras do servidor!`**\n** • Pune um usuario pelo ID!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`"+bot.user.id+" Quebrou as regras do servidor!`**")
  .addField("Permissões:", "Você precissará da permissão `Banir membros`!\n Eu precisarei da permissão `Banir membros`, para eu executar o comando!")
  .addField("Sinônimos:", "`"+prefix2+"ban`, `"+prefix2+"banir`.")
message.quote("<@"+message.author+">", embed)
  return;
}
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Putz cara, acabei de verficar aqui, e você não tem a permissão `Banir membros`...")
if(!message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))) return message.quote("<@"+message.author+">, Ops, pelo visto este usuario não esta no servidor, então eu não consigo banir ele!")
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
reason = args.slice(1).join(' ')
if(!reason) return message.reply("Ops, me forneça um motivo para o banimento!")
message.reply("Você deseja mesmo banir o usuario permanentemente?").then(msg => {
  msg.react("👍")
  msg.react("❌")
   const bora = (reaction, user) => reaction.emoji.name === '👍' && user.id === message.author.id;
        const bora1 = msg.createReactionCollector(bora, { time: 240000 })
        bora1.on('collect', async bot => {
          bot.userbanguild = false
       user.ban({reason:  reason}).catch(e => {
msg.delete()
 message.reply("Verifique se eu tenho as permissões `Banir membros` ou veja se eu estou acima do usuario que deseja banir!")
bot.userbanguild = true
})
    setTimeout(() => {
if(bot.userbanguild === false){
  msg.delete()
  message.quote("<@"+message.author+">, Ok!`"+user.user.username+"` Acabou de ser banido do servidor!")
}
      }, 1000)
        })
   const n = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        const n1 = msg.createReactionCollector(n, { time: 240000 })
        n1.on('collect', async bot => {
       msg.delete()
       message.quote("<@"+message.author+">, Banimento cancelado!")
        })
})
}
exports.help = {name: "ban", aliases: ["banir"]}