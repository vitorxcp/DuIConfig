const Discord = require("discord.js");
const ms = require("ms");
const quick = require("quick.db")
module.exports.run = async (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
if(!args[0]){
embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setAuthor("Clique aqui para ver todos meus comandos!", "https://cdn.discordapp.com/avatars/777936158638342175/91b0d82f3fd17bf1a81387079ddc0ddc.webp?size=2048", "https://duiconfig.glitch.me/comandos")
  .setTitle("**`"+(prefix2+command.slice(prefix2.length))+"`**")
  .setDescription("O Usuário aprendeu a falar novamente ou apenas querendo fazer ele falar novamente? Apenas use este comando!\n\n**Como Usar?** `"+(prefix2+command.slice(prefix2.length))+" `**`< usuario | id >`**")
  .addField("Exemplos:", "** • Desmute o usuário pela menção!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`@"+bot.user.username+"`**\n** • Desmute o usuário pelo ID!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`"+bot.user.id+"`**")
  .addField("Permissões:", "Você precissará da permissão `Adiministrador`!\n Eu precisarei da permissão `Gerenciar Cargos`, para eu executar o comando!")
  .addField("Sinônimos:", "`"+prefix2+"unmute`, `"+prefix2+"desmutar`.")
message.quote("<@"+message.author+">", embed)
  return;
	}
	if(args[0]){
			if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("``Você não possuí permissão para isto.``");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.reply("Mencione Um Usuario!");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Este Usuario e Adminsitrador, e eu não tenho permissão para puni-lo!");
  let muterole = message.guild.roles.cache.find(a => a.name === tomute.user.tag+" Mutado.");
//	id(!muterole) 
try{
		if(!message.guild.members.cache.get(tomute.user.id).roles.cache.map(a => a.id).includes(muterole.id)) return message.reply("O Usuario não esta Silenciado!")
}catch(e){
	return message.reply("O Usuario não esta Silenciado!")
}
	message.guild.member(tomute.user).roles.remove(muterole.id)
		message.guild.roles.cache.get(muterole.id).delete()
  message.reply(`Silenciamento retirado.`);
}
}

module.exports.help = {
  name: "unmute",
	aliases: ["desmutar", "UNMUTE", "DESMUTAR"]
}