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
  .setDescription("O Usuário está falando algo que não deve ou esta sendo toxico? Mute-o, assim ele ira se acalmar!\n\n**Como Usar?** `"+(prefix2+command.slice(prefix2.length))+" `**`< usuario | id > [ motivo ]`**")
  .addField("Exemplos:", "** • Mute o usuário pela menção!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`@"+bot.user.username+" Quebrou as regras do servidor!`**\n** • Mute o usuário pelo ID!**\n`"+(prefix2+command.slice(prefix2.length))+" `**`"+bot.user.id+" Quebrou as regras do servidor!`**")
  .addField("Permissões:", "Você precissará da permissão `Adiministrador`!\n Eu precisarei da permissão `Gerenciar Cargos`, para eu executar o comando!")
  .addField("Sinônimos:", "`"+prefix2+"mute`, `"+prefix2+"mutar`.")
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
  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
       data:{
          name: tomute.user.tag+" Mutado.",
        color: "#000000",
        permissions:[]
       }
      })
      message.guild.channels.cache.filter(c => c.type === "text").forEach(async (channel, id) => {
        await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
   message.channel.send(message.author+" \n ☹ - Erro ao executar o comando: ``"+e+"``!")
    }
  }
	if(message.guild.members.cache.get(tomute.user.id).roles.cache.map(a => a.id).includes(muterole.id)) return message.reply("O Usuario já esta Silenciado!")
	message.guild.member(tomute.user).roles.add(muterole.id)
  message.reply(`Usuario punido.`);
}
}

module.exports.help = {
  name: "mute",
	aliases: ["mutar", "MUTE", "MUTAR"]
}