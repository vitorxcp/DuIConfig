exports.run = async (bot,message,args, prefix2) => {
  if(!args[0]) return message.reply("Vish meu amigo, como você quer que eu mude o nickname de ninguem? Ajuda ai ne, mencione o cara ai, na moralzinha...")
if(!message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))) return message.quote("<@"+message.author+">, Ops, pelo visto este usuario não esta no servidor, então eu não consigo mudar o nick dele!")
let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.quote("<@"+message.author+">\n Ops, acabei de perceber que você não tem certas permissões, peça para um Administrador fazer isto por favor.")
 bot.usernick_user = false
 let nick = user.nickname
 if(!args[1]) args[1] = null
 user.setNickname(
args.slice(1).join(" ")).catch(e => {
message.quote("<@"+message.author+">, Ops! Verifique se eu tenho a permissão de `Gerenciar Apelidos`, ou se eu estiver, veja se eu estou a cima do usuario!")
bot.usernick_user = true
    })
    setTimeout(() => {
      if(bot.usernick_user === false){
 if(!nick) nickpa = "O usuario esta com o nickname padrão, então como você não me forneceu um nick, apenas não fiz nada!"
 if(nick) nickpa = "Como você não me forneceu um nick, eu acabei colocando o padrão do usuario!"
if(!args[1]) message.reply(nickpa+"\n> Querendo mudar o nickname do `"+user.user.username+"`? Ultilize `"+prefix2+"mudarnick < user | id > <novo_nickname>`.")
      }
if(!nick) nick = "Nenhum Nickname"
if(args[1]) {
  if(bot.usernick_user === false) message.quote("<@"+message.author+">, Pronto! Acabei de mudar o nickname, ja que antes ele usava `"+nick+"`, mais agora esta usando `"+
args.slice(1).join(" ")+"`!")
}
}, 1000)
}
exports.help = { name: "mudarnick", aliases: ["nick", "nickname", "setnick"] }