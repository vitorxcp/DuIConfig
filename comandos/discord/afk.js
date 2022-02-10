const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, prefix2) => {
		try{
	if(args.join(" ") === "spotify" || args.join(" ") === "Spotify" || args.join(" ") === "SPOTIFY" || args.join(" ") === "ouvindo spotify" || args.join(" ") === "ouvindo Spotify" || args.join(" ") === "Ouvindo Spotify" || args.join(" ") === "OUVINDO SPOTIFY" || args.join(" ") === "spt" || args.join(" ") === "SPT"){
		try{
			if(message.author.presence.activities[0].name === 'Spotify' && message.author.presence.activities[0].type === "LISTENING" || message.author.presence.activities[1].name === 'Spotify' && message.author.presence.activities[1].type === "LISTENING"){
				stats = message.author.presence.activities[0] || message.author.presence.activities[1]
if(stats.details === null || stats.details === "null") stats = message.author.presence.activities[1]
if(!stats.details) stats = message.author.presence.activities[1]
   const status = new db.table("AFKs_Spotify"); 
   let afk = await status.fetch(message.author.id); 
   const embed = new Discord.MessageEmbed()
   .setColor("ffff00") 
	 .setTimestamp()
   if (!afk) { 
		 embed.setTitle("**😴 - Modo `AFK Spotify` Ativado - 😴**")
   embed.setDescription("**O modo `AFK Spotify` e apenas uma mensagem falando que você esta ouvindo uma musica no Spotify.** \n \n> **Para Sua Informação o Modo `AFK Spotify` Será Desativado Após Você Enviar Qualquer Mensagem no Chat!**\n \n> Motivo: **Ouvindo: `"+stats.details+"` de `"+stats.state+"`.**") 
   status.set(message.author.id, args.join(" ") || `AFK Spotify`); 
	 db.set("afk_"+message.author.id, "AFK Spotify")
   } else { 
     status.delete(message.author.id); } 
	  let msg3 = await message.reply("", embed) 
		// msg3.delete(20000)
		}else{
			message.reply("Ops, você não esta escutando musicas pelo Spotify!")
		}
		}catch(err){
				message.reply("Ops, você não esta escutando musicas pelo Spotify!")
		}
	}else{
	let dsfsd = "\n \n> **Motivo:** "+args.join(" ")
  if(args[0] === undefined) dsfsd = ""
   const status = new db.table("AFKs"); 
   let afk = await status.fetch(message.author.id); 
   const embed = new Discord.MessageEmbed()
   .setColor("ffff00") 
	 .setTimestamp()
   if (!afk) { 
		 embed.setTitle("**😴 - Modo `AFK` Ativado - 😴**")
   embed.setDescription("**Para sua informação o modo `AFK` e apenas uma mensagem falando que você esta `Inativo` ou `Ausente` do Discord.** \n\n- **Para Desativa-la, basta enviar qualquer mensagem no chat que altomaticamente Desativará!** "+dsfsd) 
  // embed.setFooter(`Motivo: ${args.join(" ") ? args.join(" ") : "AFK"}`) 
   status.set(message.author.id, args.join(" ") || `AFK`); 
	 db.set("afk_"+message.author.id, "AFK")
   } else { 
     status.delete(message.author.id); } 
	  let msg3 = await message.reply("", embed) 
	//	 msg3.delete(20000)
	}
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
    name: 'afk',
    aliases: ['ausente', "AFK", "AUSENTE"]
};