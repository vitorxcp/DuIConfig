exports.run = async (bot, message,args, prefix2) => {
  		let messageArray = message.content.split(" ");
      db = require("quick.db")
    let command = messageArray[0];
	try{
    let cmdaviso = db.fetch("duicofigcmdsaviso_"+message.guild.id)
    cmdavisostats = "<:online:777980445644029974>"
    if(cmdaviso === "não") cmdavisostats = "<:off:777980398780153906>"
    prefixstats = "<:online:777980445644029974>"
    if(prefix2 === "!!") prefixstats = "<:off:777980398780153906>"
    let welcomeadd = db.fetch("welcome.guild_"+message.guild.id+".add.chat")
    welcomeaddstats = "<:online:777980445644029974>"
    if(!welcomeadd) welcomeaddstats = "<:off:777980398780153906>"
       let welcomeaddchat = "<#"+db.fetch("welcome.guild_"+message.guild.id+".add.chat")+">"
      if(welcomeaddchat === "<#undefined>" ||welcomeaddchat === "<#null>") welcomeaddchat = "`Canal Não Definido`"
       let welcomeremove = db.fetch("welcome.guild_"+message.guild.id+".remove.chat")
         welcomeremovestats = "<:online:777980445644029974>"
    if(!welcomeremove) welcomeremovestats = "<:off:777980398780153906>"
       let welcomeremovechat = "<#"+db.fetch("welcome.guild_"+message.guild.id+".remove.chat")+">"
   if(welcomeremovechat === "<#null>" || welcomeremovechat === "<#undefined>") welcomeremovechat = "`Canal Não Definido`"
  const { MessageEmbed , Discord} = require("discord.js")
  if(!args[0]){
    embed = new MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setTitle("**Painel Control.**")
    .setDescription("> Algumas configurações que requer conexão com o servidor podem dar erros!")
    .addField("**Welcome - `"+(prefix2+command.slice(prefix2.length))+" welcome`**", "> **Entrada - "+welcomeaddstats+".** \n> **Saida - "+welcomeremovestats+".**")
    .addField("**Prefix - `"+(prefix2+command.slice(prefix2.length))+" prefix`**", "> **Prefix - "+prefixstats+".**")
    .addField("**Comandos - `"+(prefix2+command.slice(prefix2.length))+" comandos`**", "> **Erro Cmd - <:online:777980445644029974>.** \n> **Cmd Inexistente - "+cmdavisostats+".**")
message.quote("<@"+message.author+">", embed)
  }
  if(args[0] === "cmd" | args[0] === "comando" | args[0] === "commands" | args[0] === "command" | args[0] === "comandos" | args[0] === "cmds"){
    if( args[1] === "inexistente" | args[1] === "ines" | args[1] === "aviso"){
if( args[2] === "sim" | args[2] === "s" | args[2] === "colocar" | args[2] === "add" | args[2] === "ok"){
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.quote("<@"+message.author+">\n Ops, acabei de perceber que você não tem certas permissões, peça para um Administrador fazer isto por favor.")
db.set("duicofigcmdsaviso_"+message.guild.id, "sim")
message.quote("<@"+message.author+">, Pronto, agora irei avisar se o comando existe!")
}
if( args[2] === "não" | args[2] === "n" | args[2] === "nao" | args[2] === "sai" | args[2] === "tirar"){
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.quote("<@"+message.author+">\n Ops, acabei de perceber que você não tem certas permissões, peça para um Administrador fazer isto por favor.")
db.set("duicofigcmdsaviso_"+message.guild.id, "não")
message.quote("<@"+message.author+">, Pronto, agora eu não irei avisar quando o comando não existir!")
}
if(args[2] === "não" | args[2] === "n" | args[2] === "nao" | args[2] === "sai" | args[2] === "tirar" | args[2] === "sim" | args[2] === "s" | args[2] === "colocar" | args[2] === "add" | args[2] === "ok"){}else{
    embedhelp = new MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setTitle("**Commands Control.**")
    .setDescription("> Configure aqui as configurações dos comandos.")
    .addField("**Erro Cmd - <:online:777980445644029974> (`Isto Esta Em Fase Final De Testes`)**","> Isto ira fazer que quando um comando der erro, ele não ira avisar o usuario.")
 .addField("**Cmd Inexistente - "+cmdavisostats+" (`"+(prefix2+command.slice(prefix2.length))+" "+args[0]+" aviso < sim | nao >`)**", "> Isto ira fazer que quando um comando não existe no bot, ele ira responder falando que não existe.")
    message.quote("<@"+message.author+">", embedhelp)
}
    }else{
  embedhelp = new MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setTitle("**Commands Control.**")
    .setDescription("> Configure aqui as configurações dos comandos.")
    .addField("**Erro Cmd - <:online:777980445644029974> (`Isto Esta Em Fase Final De Testes`)**","> Isto ira fazer que quando um comando der erro, ele não ira avisar o usuario.")
 .addField("**Cmd Inexistente - "+cmdavisostats+" (`"+(prefix2+command.slice(prefix2.length))+" "+args[0]+" aviso < sim | nao >`)**", "> Isto ira fazer que quando um comando não existe no bot, ele ira responder falando que não existe.")
    message.quote("<@"+message.author+">", embedhelp)
    }
  }
  if(args[0] === "prefix" | args[0] === "setprefix" | args[0] === "prefixo"){
     if(args[1]){
          if (!message.member.hasPermission('ADMINISTRATOR')) return message.quote("<@"+message.author+">\n Ops, acabei de perceber que você não tem certas permissões, peça para um Administrador fazer isto por favor.")
       newprefix = args[1]
       if(args[1] === "normal" | args[1] === "null" | args[1] === "undefined" | args[1] === "propio") newprefix = "!!"
       const fs = require("fs")
         let prefixes = JSON.parse(fs.readFileSync("./database/bot/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "!!"
    };
}
  let prefix = prefixes[message.guild.id].prefixes;
  prefixes[message.guild.id] = {
    prefixes: newprefix
  };
  fs.writeFile("./database/bot/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
    let sEmbed = new MessageEmbed()
.setColor("RANDOM")
  .setTitle('**O Prefix Do Servidor `'+ message.guild.name +'` Foi Atualizado:**')
  .setDescription('**Novo Prefix Atulizado Para: `'+ newprefix +'`.**');
  message.quote("<@"+message.author+">", sEmbed);
     }else{
         embedhelp = new MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setTitle("**Prefix Control.**")
    .setDescription("> Tem algum bot usando o prefix `"+prefix2+"`? Então mude-o para evitar conflitos!")
    .addField("**Prefix - "+prefixstats+" (`"+(prefix2+command.slice(prefix2.length))+" "+args[0]+" < prefixo >`)**", "> **`"+prefix2+"`.**")
    message.quote("<@"+message.author+">", embedhelp)
     }
  }
  if(args[0] === "welcome"){
    if(args[1] === "add" | args[1] === "entrada" | args[1] === "adicionar" | args[1] === "entrar") {
       if (!message.member.hasPermission('ADMINISTRATOR')) return message.quote("<@"+message.author+">\n Ops, acabei de perceber que você não tem certas permissões, peça para um Administrador fazer isto por favor.")
      if(!args[2]) return message.quote("<@"+message.author+">, coloque o canal de entradas por favor!")
let chat = bot.channels.cache.get(args[1]) || message.mentions.channels.first()
db.set("welcome.guild_"+message.guild.id+".add.id", message.guild.id)
db.set("welcome.guild_"+message.guild.id+".add.chat", chat.id)
message.quote("<@"+message.author+">, Canal setado!")
return;
    }else{
       embedhelp = new MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setTitle("**Welcome Control.**")
    .setDescription("> Querendo ver quem entrou no seu servidor ou ate mesmo quem saiu? Ultilize os comandos abaixo ou ate mesmo verifique em quais canais será anunciado!")
    .addField("**Entrada - "+welcomeaddstats+" (`"+(prefix2+command.slice(prefix2.length))+" welcome entrada < chat | id >`)**", "> **"+welcomeaddchat+".**")
    .addField("**Saida - "+welcomeremovestats+" (`"+(prefix2+command.slice(prefix2.length))+" welcome saida < chat | id >`)**", "> **"+welcomeremovechat+".**")
    message.quote("<@"+message.author+">", embedhelp)
    }
    if(args[1] === "saida" | args[1] === "remove" | args[1] === "sai" | args[1] === "sair" | args[1] === "left" | args[1] === "saida"){
       if (!message.member.hasPermission('ADMINISTRATOR')) return message.quote("<@"+message.author+">\n Ops, acabei de perceber que você não tem certas permissões, peça para um Administrador fazer isto por favor.")
if(!args[2]) return messagequote("<@"+message.author+">, coloque o canal de saidas por favor!")
let chat = bot.channels.cache.get(args[1]) || message.mentions.channels.first()
db.set("welcome.guild_"+message.guild.id+".remove.id", message.guild.id)
db.set("welcome.guild_"+message.guild.id+".remove.chat", chat.id)
message.quote("<@"+message.author+">, Canal setado!")
      return;
    }else{
       embedhelp = new MessageEmbed()
    .setTimestamp()
    .setColor("BLUE")
    .setTitle("**Welcome Control.**")
    .setDescription("> Querendo ver quem entrou no seu servidor ou ate mesmo quem saiu? Ultilize os comandos abaixo ou ate mesmo verifique em quais canais será anunciado!")
    .addField("**Entrada - "+welcomeaddstats+" (`"+(prefix2+command.slice(prefix2.length))+" welcome "+args[1]+" < chat | id >`)**", "> **"+welcomeaddchat+".**")
    .addField("**Saida - "+welcomeremovestats+" (`"+(prefix2+command.slice(prefix2.length))+" welcome "+args[1]+" < chat | id >`)**", "> **"+welcomeremovechat+".**")
    message.quote("<@"+message.author+">", embedhelp)
    }
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
  name: "config",
  aliases:["painel", "configurar"]
}