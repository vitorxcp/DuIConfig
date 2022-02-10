
const mongoDB = require('./database/databasebot/mongodb.js')
	const duiDB = require("./database/databasebot/datacenter.json")
const Jsoning = require("jsoning");
const { APIMessage, Message, Client, Collection } = require('discord.js')
const path = require("path");
	const Logger = require("./Logger");
 require("discordjs-activity")(this)
    this.logger = new Logger(path.join(__dirname, ".", "Logs.log"));
Message.prototype.quote = async function (content, options) {
  const message_reference = {
    message_id: (!!content && !options ? typeof content === 'object' && content.messageID : options && options.messageID) || this.id,
    message_channel: this.channel.id
  }
  const allowed_mentions = {
    parse: ['users', 'roles', 'everyone'],
    replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
  }
  const { data: parsed, files } = await APIMessage.create(this, content, options).resolveData().resolveFiles()
  this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference, allowed_mentions },
    files
  })
}
const Discord = require('discord.js');
const active = new Map();
const bot = new Discord.Client({disableEveryone: true});
const disbut = require('discord.js-buttons')(bot);
const DBL = require('dblapi.js');
const dbl = new DBL(process.env.topgg, { webhookPort: 5000, webhookAuth: 'duliconfigbmx' });
const { AutoPoster } = require('topgg-autoposter');
AutoPoster(process.env.topgg, bot).on('posted', async (stats) => {
  let stats_v2 = await stats
 this.logger.api('Estatisticas do Bot Postada em Top.gg.')
  })
dbl.webhook.on('ready', hook => {
setTimeout(() => {
	 this.logger.api(`Webhook Retornado, API Top.gg Ativada.`);
}, 5000)
});
dbl.webhook.on('vote', vote => {
	const Database = require('@replit/database');
const db2 = new Database();
setTimeout(async() => {
	let topgg_vote = await db2.get("topgg_vote")
		let topgg_user_tag = await db2.get("topgg_user_tag")
	if(!topgg_vote) topgg_vote = 0
	let topgg_user_vote = await db2.get("topgg_"+vote.user+"_vote")
	if(!topgg_user_vote) topgg_user_vote = 0
	 this.logger.api(`User ID ${bot.users.cache.get(""+vote.user+"").tag} votou Em Mim (Top.gg).`);
	 db2.set("topgg_user_tag", ""+bot.users.cache.get(""+vote.user+"").tag+"")
 db2.set("topgg_vote", (topgg_vote + 1))
  db2.set("topgg_"+vote.user+"_vote", (topgg_user_vote + 1))
setTimeout(async() => {
		let topgg_vote2 = await db2.get("topgg_vote")
		let topgg_user_tag2 = await db2.get("topgg_user_tag")
	if(!topgg_vote) topgg_vote2 = 0
	let topgg_user_vote2 = await db2.get("topgg_"+vote.user+"_vote")
	if(!topgg_user_vote) topgg_user_vote2 = 0
		embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setThumbnail(bot.users.cache.get(""+vote.user+"").avatarURL())
.setTitle("**Vote (`Top.gg`).**")
.setDescription("**Muito Obrigado `"+bot.users.cache.get(vote.user).tag+"` Por Votar!** \n \n> **Agora Estou Com `"+topgg_vote2+"` Votos!**")
bot.channels.cache.get("870787576796160010").send(embed)
	userdm = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setThumbnail(bot.users.cache.get(""+vote.user+"").avatarURL())
//.setTitle("**Vote (`Top.gg`).**")
.setDescription("**Muito Obrigado <@"+vote.user+"> Por Votar Em Mim No Top.gg!** \n**Você acabou ganhando `800` coins por este voto!**\n \n> **Agora Estou Com `"+topgg_vote2+"` Votos!** \n > **Você Ja Votou Em Mim `"+(topgg_user_vote+1)+"` Vezes, Muito Obrigado Mesmo ;3**")
bot.users.cache.get(vote.user).send(userdm)
 let money2 = JSON.parse(fs.readFileSync("./database/economy/moneys.json", "utf8"));
         let moneyadd = 800;
  if(!money2[vote.user]){
    money2[vote.user] = {
      money2: 0
    };
}
  let money = money2[vote.user].money2;
   money2[vote.user] = {
    money2: money+moneyadd
  };
  fs.writeFile("./database/economy/moneys.json", JSON.stringify(money2), (err) => {
    if (err) console.log(err)
  });
}, 5000)
}, 5000)
});
	const colors = require("colors");
db = require('quick.db');
const Database = require('@replit/database');
const db2 = new Database();
const ping = new Date();
ping.setHours(ping.getHours() - 3);
const fs = require('fs');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir('./comandos/discord', (err, files, message) => {
	if (err) console.error(err);
	let arquivojs = files.filter(f => f.split('.').pop() == 'js');
	arquivojs.forEach((f, i) => {
		let props = require(`./comandos/discord/${f}`);
		this.logger.cmd(`${colors.cyan(f.split(".")[0])} Carregado (${colors.green("comandos/discord/"+f)}).`);
		bot.commands.set(props.help.name, props);
		props.help.aliases.forEach(alias => {
			bot.aliases.set(alias, props.help.name);
		});
	});
});
fs.readdir('./comandos/diversão', (err, files, message) => {
	if (err) console.error(err);
	let arquivojs = files.filter(f => f.split('.').pop() == 'js');
	arquivojs.forEach((f, i) => {
		let props = require(`./comandos/diversão/${f}`);
this.logger.cmd(`${colors.cyan(f.split(".")[0])} Carregado (${colors.green("comandos/diversão/"+f)}).`);
		bot.commands.set(props.help.name, props);
		props.help.aliases.forEach(alias => {
			bot.aliases.set(alias, props.help.name);
		});
	});
});
fs.readdir('./comandos/moderação', (err, files, message) => {
	if (err) console.error(err);
	let arquivojs = files.filter(f => f.split('.').pop() == 'js');
	arquivojs.forEach((f, i) => {
		let props = require(`./comandos/moderação/${f}`);
this.logger.cmd(`${colors.cyan(f.split(".")[0])} Carregado (${colors.green("comandos/moderação/"+f)}).`);
		bot.commands.set(props.help.name, props);
		props.help.aliases.forEach(alias => {
			bot.aliases.set(alias, props.help.name);
		});
	});
});
bot.on('ready', () => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3)
		this.logger.api(''+colors.cyan("DuiConfig")+' Conectado No Discord.');
	setTimeout(() => {
			this.logger.server(''+colors.cyan("DuiConfig")+' Conectado No Servidor.');
		db.set('onoff', 'on');
	}, 2000);
	const moment = require('moment');
	moment.locale('pt-BR');		
	setInterval(() => {
		let totalSeconds = bot.uptime / 1000;
		let days = Math.floor(totalSeconds / 86400);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let second = Math.floor(totalSeconds % 60);
			msgsa = { name: '😜 • Como vai? Tudo em cima?' };
		const ms2 = require("pretty-ms")
    if(!bot.uptimea) bot.uptimea = 0
let p = [
{name: `😏 • Apenas um simples Bot com 14 anos tentando alegrar e divertir ${bot.guilds.cache.size} Servidores.`,type: 'WATCHING'},
{name:'😴 • Fazem: ' + ms2(bot.uptime) +' des que eu acordei.',type: 'WATCHING'},
{name: `😘 • Não ligue para aquelas pessoas toxicas, apenas siga seus sonhos, eu acredito em você ;3`,type: 'STREAMING',url: 'https://www.twitch.tv/vitor_xp_1958'},
{name: `😜 • Alegria e tudo, não deixe a triteza te consumir, acredite em você, você pode tudo! Apenas Sonhe coisas boas...`,type: 'STREAMING',url: 'https://www.twitch.tv/vitor_xp_1958'},
 {name: "⚠ • Erros poderam ser reportados no meu servidor do Discord (!!suporte).", type: 'LISTENING'},
  {name: "🤪 • Será que um dia irei ficar doido? Pera, e se agora mesmo eu estiver!?", type: 'LISTENING'},
  {name: "✌ • Como assim Discord Buttons!? Mais que merda e esta...", type: 'STREAMING',url: 'https://www.twitch.tv/vitor_xp_1958'},
    {name: "✌ • Vey... Olha a chuva de bugs, se cuidem em, e noz!", type: 'STREAMING',url: 'https://www.twitch.tv/vitor_xp_1958'},
      {name: "✌ • Alguem me explica mais o que, que esta acontecendo com o Discord? Ele esta ficando maluquinho!", type: 'STREAMING',url: 'https://www.twitch.tv/vitor_xp_1958'},
  {name: "👀 • Fique atentos em novas novidades no meu servidor do Discord (!!suporte)...", type: 'LISTENING'}
];
			function setStatus() {
				let randomStatus = Math.floor(Math.random() * p.length);
				bot.user.setActivity(p[randomStatus]);
			}
			setStatus();
	}, 20000)
	setTimeout(() => {this.logger.api('Ativando '+colors.cyan("Status")+'.');}, 10000);
	setTimeout(() => {this.logger.api(''+colors.cyan("Status")+' Ativado.');}, 15000);
});
db.delete('db_about');
bot.on('clickButton', async (button) => {
    if(button.id === "menu_info"){
    const moment = require('moment');
moment.locale('pt-BR');
    		let topgg_user_tag = await db2.get("topgg_user_tag")
		if(!topgg_user_tag) topgg_user_tag = "undefined#0000"
				let topgg_vote = await db2.get("topgg_vote")
		if(!topgg_vote) topgg_vote = "0"
    const ms = require("pretty-ms")
		    let cmdexecute = await db2.get(`comandos_executados`);
						if(cmdexecute === null) cmdexecute = "0"
	     let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("> **     Bot-Info:**")
				.setThumbnail(bot.user.avatarURL())
				.setTimestamp()
         .setDescription("**Olá, eu sou o famozin `"+bot.user.username+"`, mais para meus amigos mais próximos meu apelido e `Dui`!**\n**Eu fui desenvolvido pela a minha equipe no dia `16` (`segunda-feira`) de `Novembro` de `2020` (`"+moment(bot.user.createdTimestamp).fromNow()+" atrás`).**\n**Eu já executei `"+cmdexecute.toLocaleString()+"` comandos nos ultimos `"+ms(bot.uptimea)+"`, e atualmente estou em `"+bot.guilds.cache.size.toLocaleString()+"` servidores com a latencia aproximada de `"+bot.ws.ping+"`ms.** \n \n > **[Top.gg](https://top.gg/bot/"+bot.user.id+"/) Ultimo votador: `"+topgg_user_tag+"`.**\n > **[Top.gg](https://top.gg/bot/"+bot.user.id+"/) Bot votos: `"+topgg_vote+"`.**");
        button.message.edit("<@"+button.clicker.user.id+">", embed)
  }
  //
  if(button.id === "info_info"){
    const moment = require('moment');
moment.locale('pt-BR');
    const ms = require("pretty-ms")
const os = require('os')
const cpuStat = require("cpu-stat");
		if(cluster1 === null) cluster1 = "Loading..."
				if(cluster2 === null) cluster2 = "loading..."
		if(cluster3 === null) cluster3 = "Loading..."
		if(cluster4 === null) cluster4 = "Loading..."
		if(ping1 === null) ping1 = "Loading..."
				if(ping2 === null) ping2 = "loading..."
		if(ping3 === null) ping3 = "Loading..."
		if(ping4 === null) ping4 = "Loading..."
		let topgg_user_tag = await db2.get("topgg_user_tag")
		if(!topgg_user_tag) topgg_user_tag = "undefined#0000"
				let topgg_vote = await db2.get("topgg_vote")
		if(!topgg_vote) topgg_vote = "0"
						if(cmdexecute === null) cmdexecute = "0"
    	if(bot.cluster === "ue"){
						nodemb = new Discord.MessageEmbed()
						.setColor("#FF0000")
						.setTimestamp()
						.setTitle("Clusters OFF:")
						.setDescription("**Ops, no momentos os clusters estão offlines, tente novamente mais tarde...**")
return button.message.edit("<@"+button.clicker.user.id+">", nodemb)
}
		cpuStat.usagePercent(function(err, percent, seconds) {
     cpuStat.usagePercent({
    coreIndex: 0,
    sampleMs: 2000,
  },
  function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
});
var totalCores = cpuStat.totalCores();
var avgClockMHz = cpuStat.avgClockMHz();
var avgClockMHzCore2 = cpuStat.clockMHz(2);
								let game = {
			PLAYING: "-> Jogando:",
				STREAMING: "-> Transmitindo:",
					LISTENING: "-> Ouvindo:",
						WATCHING: "-> Assistindo:"
		}
		if(!bot.user.presence.activities[0]) agm = "-> Jogando:" 
		if(bot.user.presence.activities[0]) agm = (""+game[bot.user.presence.activities[0].type]+"")
		let status_presence = agm
		let status_game = bot.user.presence.activities[0] ? bot.user.presence.activities[0].name : 'Nada'
var embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp() 
.setTitle("> **    Informações Adicionais:**")
.setThumbnail(bot.user.avatarURL())
.setDescription("**-> Nome: `"+bot.user.username+"`.** \n **-> Bot Tag: `"+bot.user.tag+"`.** \n **-> ID Bot: `"+bot.user.id+"`.** \n **-> Discord Versão: `v"+Discord.version+"`.** \n **-> Database Versão: `v"+db.version+"`.** \n **-> Bot Versão: `v"+db.fetch("vbot")+"`.** \n **-> Bot Online: `"+ms(bot.uptimea)+"`.** \n **"+status_presence+" `"+status_game+"`** \n **-> Executei `"+cmdexecute.toLocaleString()+"` Comandos Deste Que Eu Acordei.** \n **-> Total De Comandos: `"+bot.commands.size+"`.** \n **-> CPU Bot: `"+percent.toFixed(0)+"%`.** \n **-> Memoria Usada: `"+(process.memoryUsage().heapUsed / 1024 / 1024+90).toFixed(0)+"MB`.** \n**-> Core: `"+totalCores+"`.**\n**-> Clocks: `"+avgClockMHz+"/"+avgClockMHzCore2+"`.**\n **-> Servidores: `"+bot.guilds.cache.size.toLocaleString()+"`.** \n **-> Bots: `"+bot.users.cache.filter(m => m.bot).size.toLocaleString()+"`.** \n **-> Usuarios: `"+ (bot.users.cache.size -bot.users.cache.filter(m => m.bot).size).toLocaleString()+"`.**")
button.message.edit("<@"+button.clicker.user.id+">", embed)
    })
  }
})
