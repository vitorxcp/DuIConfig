const disbut = require("discord.js-buttons");
const Discord = require("discord.js")
const moment = require('moment');
moment.locale('pt-BR');
const db2 = require("quick.db")
const Database = require("@replit/database")
const db = new Database()
 db2.set("vbot", "1.20.3")
const ms = require("pretty-ms")
const os = require('os')
const cpuStat = require("cpu-stat");
const {version} = require("discord.js")
exports.run = async(bot,message,args, prefix2) => {
	//	message.channel.startTyping();
role_color = "BLUE"
db2.add("db_about", 1)
    let cluster1 = await db.get(`cluster1`);
    let cluster2 = await db.get(`cluster2`);
    let cluster3 = await db.get(`cluster3`);
    let cluster4 = await db.get(`cluster4`);
		if(cluster1 === null) cluster1 = "Loading..."
				if(cluster2 === null) cluster2 = "loading..."
		if(cluster3 === null) cluster3 = "Loading..."
		if(cluster4 === null) cluster4 = "Loading..."
    let ping1 = await db.get(`ping1`);
    let ping2 = await db.get(`ping2`);
    let ping3 = await db.get(`ping3`);
    let ping4 = await db.get(`ping4`);
		   let ping11 = await db.get(`ping1`);
    let ping21 = await db.get(`ping2`);
    let ping31 = await db.get(`ping3`);
    let ping41 = await db.get(`ping4`);
		if(ping1 === null) ping1 = "Loading..."
				if(ping2 === null) ping2 = "loading..."
		if(ping3 === null) ping3 = "Loading..."
		if(ping4 === null) ping4 = "Loading..."
		let topgg_user_tag = await db.get("topgg_user_tag")
		if(!topgg_user_tag) topgg_user_tag = "undefined#0000"
				let topgg_vote = await db.get("topgg_vote")
		if(!topgg_vote) topgg_vote = "0"
		    let cmdexecute = await db.get(`comandos_executados`);
						if(cmdexecute === null) cmdexecute = "0"
	     let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("> **     Bot-Info:**")
				.setThumbnail(bot.user.avatarURL())
				.setTimestamp()
        .setDescription("**Olá, eu sou o famozin `"+bot.user.username+"`, mais para meus amigos mais próximos meu apelido e `Dui`!**\n**Eu fui desenvolvido pela a minha equipe no dia `16` (`segunda-feira`) de `Novembro` de `2020` (`"+moment(bot.user.createdTimestamp).fromNow()+" atrás`).**\n**Eu já executei `"+cmdexecute.toLocaleString()+"` comandos nos ultimos `"+ms(bot.uptimea)+"`, e atualmente estou em `"+bot.guilds.cache.size.toLocaleString()+"` servidores com a latencia aproximada de `"+bot.ws.ping+"`ms.** \n \n > **[Top.gg](https://top.gg/bot/"+bot.user.id+"/) Ultimo votador: `"+topgg_user_tag+"`.**\n > **[Top.gg](https://top.gg/bot/"+bot.user.id+"/) Bot votos: `"+topgg_vote+"`.**");
   let menu = new disbut.MessageButton()
  .setStyle('blurple')
  .setID("menu_info") 
  .setLabel('📃');
    let info = new disbut.MessageButton()
  .setStyle('blurple')
  .setID("info_info") 
  .setLabel('⚙');
message.channel.send("<@"+message.author+">", {
   buttons: [menu, info], embed: embed
})
}
exports.help = {
	name:"botinfo",
	aliases: ["duiinfo", "dui-info", "bot-info", "duiconfig", "BOTINFO", "DUICONFIG", "DUI-INFO", "BOT-INFO", "ABOUT", "about"]
}