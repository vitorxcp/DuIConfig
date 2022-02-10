const translate = require('@vitalets/google-translate-api');
const Discord = require('discord.js');
exports.run = (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
	const perms = require("../../database/perms/perms.json")
//if(message.author.id !== "518862457876250625") return message.reply("Comando Em Manutenção...")
        let messageArray = message.content.split(" ");
    let command = messageArray[0];
    if(!args[0]){
        var mebed = new Discord.MessageEmbed()
        .setColor("#123456")
        .setTimestamp()
        .setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
        .setDescription("**Traduza Algo!**")
        .addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" en Oi`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" pt Hi`.**")
        .addField("**Permissões:**", "**-> `Nenhuma`!**")
        .addField("**Sinonimos:**", "**-> `"+prefix2+"traduzir` | `"+prefix2+"tradutor` | `"+prefix2+"translate`.**")
        message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
return;
}
  let msg = args.slice(1).join(' ');
	if(!msg){
       var mebed = new Discord.MessageEmbed()
        .setColor("#123456")
        .setTimestamp()
        .setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
        .setDescription("**Traduza Algo!**")
        .addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" en Oi`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" pt Hi`.**")
        .addField("**Permissões:**", "**-> `Nenhuma`!**")
        .addField("**Sinonimos:**", "**-> `"+prefix2+"traduzir` | `"+prefix2+"tradutor` | `"+prefix2+"translate`.**")
        message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
return;
	}
  translate(msg, { from: "auto", to: args[0] }).then(res => {
	 message.channel.send(":map: | <@"+message.author+"> "+res.text, {
     allowedMentions: {
        disableEveryone: false
    }
   })
  }).catch(err => {
		console.log(err)
message.channel.send(":map: | <@"+message.author+"> "+msg)
  })
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
	name: "traduzir",
	aliases: ["translate", "tradutor", "TRADUZIR", "TRADUTOR", "TRANSLATE"]
}