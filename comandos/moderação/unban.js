const Discord = require("discord.js");
const fs = require("fs")
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
		if(message.author.id != "518862457876250625") return message.reply("este comando está Desativado para Manutenção!")
		if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(`**VOCÊ NÃO TEM PERMISSÃO PARA USAR ESSE COMANDO!**`)
    let user = message.mentions.users.first()
	 const member = message.guild.member(user);
    let tomute = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
		if(args[1] === undefined) args[1] = ""
    var embed1 = new Discord.MessageEmbed()
        .setTimestamp()
        .setDescription("**Você Tem Certeza Que Quer Des-Banir O ``"+tomute.tag+"``?**")
    message.channel.send(message.author, embed1).then(async msg => {
        await msg.react('✅')
        await msg.react('❌')
        const admfilterOPA = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        const admOPA = msg.createReactionCollector(admfilterOPA, { time: 2400000 })
        admOPA.on('collect', async bot => {
            var emoji1 = new Discord.MessageEmbed()
          .setDescription("**Você Acaba De Des-Banir O Usuario ``"+tomute.tag+"``!**")
					.setColor("GREEN")
            await msg.channel.send(message.author, emoji1)
						tomute.unban
        });
				const admfilterOPA2 = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        const admOPA2 = msg.createReactionCollector(admfilterOPA2, { time: 2400000 })
        admOPA2.on('collect', async bot => {
            var emoji1 = new Discord.MessageEmbed()
.setDescription("**Desbanimento Cancelado!**")
            await msg.channel.send(message.author, emoji1)
        });
    })
}
exports.help = {
    name: "unban-test",
		aliases: ["unban-test"]
}