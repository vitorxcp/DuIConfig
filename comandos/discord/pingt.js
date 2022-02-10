exports.run = async (bot, message, args, prefix2) => {
  	const Discord = require("discord.js")
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
	if(!args[0]){
				if(args[0]==="clusters"| args[0] ==="cluster" | args[0]=== "cl"|args[0] === "shards"| args[0]==="shard"| args[0] === "shardid"| args[0]==="shardID"|args[0]==="sh")return;
				const request = require("request")
request({
url: "https://ghosthost.vitorxp.repl.co",
json: true
}, async function (error, response, body) {
if (!error && response.statusCode === 200) {
bot.ping_server = body.server.ping

} else {
bot.ping_server = body.server.ping
}
})
				 message.channel.startTyping();
		role_color = "BLUE"
	const db = require("quick.db")
	const Database = require("@replit/database")
	const db2 = new Database()
	let cluster22 = ["1", "2", "3", "4"]
	 	let cluster = await db2.get(`clusters2222_${message.guild.id}`)
if(cluster === null) {
		 let cluster2 = cluster22[Math.floor(Math.random() * cluster22.length)];
		 		 if(cluster === null) cluster = cluster2
db2.set("clusters2222_"+message.guild.id, cluster2)
}
	cluster_number = db.fetch(cluster+"_cluster_"+message.guild.id)
		if(!cluster_number){
			db.add(cluster+"_cluster", 1)
			db.set(cluster+"_cluster_"+message.guild.id, "foi")
		}
let ping1 = await db2.get(`ping1`);
    let ping2 = await db2.get(`ping2`);
    let ping3 = await db2.get(`ping3`);
    let ping4 = await db2.get(`ping4`);
		if(ping1 === null) ping1 = "0"
				if(ping2 === null) ping2 = "0"
		if(ping3 === null) ping3 = "0"
		if(ping4 === null) ping4 = "0"
		let ping = "0"
if(cluster === "1") ping = ""+ping1+""
if(cluster === "2") ping = ""+ping2+""
if(cluster === "3") ping = ""+ping3+""
if(cluster === "4") ping = ""+ping4+""
 	let shardID = await db2.get(`shard_${message.guild.id}`)
if(shardID === null) {
        let shardnumber = Math.floor(Math.random() * 400)+1;
		 		 if(shardID === null) shardID = shardnumber
db2.set("shard_"+message.guild.id, shardnumber)
}
 	let trunst = await db2.get(`trunst_${message.guild.id}`)
if(trunst === null) {
        let trunst_number = Math.floor(Math.random() * shardID)+1;
		 		 if(trunst === null) trunst = trunst_number
db2.set("trunst_"+message.guild.id, trunst_number)
}
let random_number = [60000,  50000, 40000, 65000, 55000, 45000, 140000, 120000]
		 let number_size = random_number[Math.floor(Math.random() * random_number.length)];
		 ping_info1 = "Muito Ruim"
		  if(Math.round(bot.ws.ping) < 5000) ping_info1 = "Muito Ruim"
		  if(Math.round(bot.ws.ping) < 500) ping_info1 = "Ruim"
		  if(Math.round(bot.ws.ping) < 80) ping_info1 = "Bom"
		 if(Math.round(bot.ws.ping) < 50) ping_info1 = "Exelente"
		 ping_info2 = "Muito Ruim"
		 if(Math.round(ping) < 5000) ping_info2 = "Muito Ruim"
		  if(Math.round(ping) < 500) ping_info2 = "Ruim"
		  if(Math.round(ping) < 80) ping_info2 = "Bom"
		 if(Math.round(ping) < 50) ping_info2 = "Exelente"
		 msg = "**Cluster `"+cluster+"` (📡Shards'ID: `"+trunst+"`/`"+shardID+"`): `"+Math.round(ping)+"`ms (`"+ping_info2+"`).**"
if(!bot.cluster) msg = "> **No momento o Cluster `"+cluster+"` esta offline, mais fiquei de boas o DuiConfig esta operando no lugar dela!**"
	 msg1 = "**Cluster `"+cluster+"` (📡Shards'ID: `...`/`...`): `....`ms.**"
if(!bot.cluster) msg1 = "> **No momento o Cluster `"+cluster+"` esta offline, mais fiquei de boas o DuiConfig esta operando no lugar dela!**"
	 msg2 = "**Cluster `"+cluster+"` (📡Shards'ID: `"+trunst+"`/`"+shardID+"`): `...`ms.**"
if(!bot.cluster) msg2 = "> **No momento o Cluster `"+cluster+"` esta offline, mais fiquei de boas o DuiConfig esta operando no lugar dela!**"
if(!bot.cluster) ping = 0
	var embed1 = new Discord.MessageEmbed()
.setColor(role_color)
	.setTimestamp(Date.now())
	.setTitle("> Ping Pong!")
	.setDescription("```html\n<Carregando Pings...>\n```")
	const m = await message.channel.send("<@"+message.author.id+">", embed1);
	 ping_info3 = "Muito Ruim"
	  ping_info4 = "Muito Ruim"
				 mumber_4 = 0
		 if(ping_info1 === "Bom") mumber_4 = 800
		  if(ping_info1 === "Exelente") mumber_4 = 1000
		 if((m.createdTimestamp - message.createdTimestamp) < 1500) ping_info3 = "Ruim"
		  if((m.createdTimestamp - message.createdTimestamp) < 500) ping_info3 = "Bom"
		 if((m.createdTimestamp - message.createdTimestamp) < 50) ping_info3 = "Exelente"
		 	 if((bot.ping_server) < 1000) ping_info4 = "Ruim"
		  if((bot.ping_server) < 500) ping_info4 = "Bom"
		 if((bot.ping_server) < 50) ping_info4 = "Exelente"
		 if(message.content.includes('-')) {
	db.set("mdssssss_ping", "s")
	}
let mdsssss = (bot.ws.ping - ping)
if(mdsssss === bot.ws.ping) mdsssss = 10
if(mdsssss === ping) mdsssss = 12
//if(mdsssss = message.content.includes('-')) mdsssss = 3
	if(db.fetch("mdssssss_ping") === "s") mdsssss = 3
	if((bot.ws.ping - ping) === -1) mdsssss = 1
	if((bot.ws.ping - ping) === -2)  mdsssss = 2
	if((bot.ws.ping - ping) === -3)  mdsssss = 3
		if((bot.ws.ping - ping) === -4)  mdsssss = 4 
	if((bot.ws.ping - ping) === -5)  mdsssss = 5
	if((bot.ws.ping - ping) === -6)  mdsssss = 6
		if((bot.ws.ping - ping) === -7)  mdsssss =7 
	if((bot.ws.ping - ping) === -8)  mdsssss = 8
	if((bot.ws.ping - ping) === -9)  mdsssss = 9
		if((bot.ws.ping - ping) < -200)  mdsssss = Math.floor(Math.random() * 200)+1
			if((bot.ws.ping - ping) < -100)  mdsssss = Math.floor(Math.random() * 100)+1
				if((bot.ws.ping - ping) < -500)  mdsssss = Math.floor(Math.random() * 500)+1
					if((bot.ws.ping - ping) < -1000)  mdsssss = Math.floor(Math.random() * 1000)+1
						if(bot.ping_server < -5000)  mdsssss = Math.floor(Math.random() * 5000)+1
						
	var embed = new Discord.MessageEmbed()
.setColor(role_color)
	.setTimestamp(Date.now())
	.setTitle("> Ping Pong!")
	.setDescription("**DuiConfig: `"+Math.round(bot.ws.ping)+"`ms (`"+ping_info1+"`).** \n "+msg+" \n **WebServer: `"+(m.createdTimestamp - message.createdTimestamp)+"`ms (`"+ping_info3+"`).** \n **Hospedagem: `"+bot.ping_server+"`ms(`"+ping_info4+"`).**")
	m.edit("<@"+message.author.id+">", embed);
	setTimeout(() => {
	db2.delete("trunst_"+message.guild.id)
	}, number_size)
	 message.channel.stopTyping()
   return;
	}
if(args[0]==="clusters"| args[0] ==="cluster" | args[0]=== "cl"|args[0] === "shards"| args[0]==="shard"| args[0] === "shardid"| args[0]==="shardID"|args[0]==="sh"){
      const ms = require("parse-ms")
	const Database = require("@replit/database")
const db4 = new Database()
		let totalSeconds = bot.uptimea / 1000
		let d = Math.floor(totalSeconds / 86400)
		let h = Math.floor(totalSeconds / 3600)
		totalSeconds %= 3600
		let m = Math.floor(totalSeconds / 60)
		let s = Math.floor(totalSeconds % 60)
	  let cluster11 = await db4.get(`cluster1`);
    let cluster21 = await db4.get(`cluster2`);
    let cluster31 = await db4.get(`cluster3`);
    let cluster41 = await db4.get(`cluster4`);
		if(cluster11 === null) cluster11 = "..."
		if(cluster21 === null) cluster21 = "..."
		if(cluster31 === null) cluster31 = "..."
		if(cluster41 === null) cluster41 = "..."
    let ping11 = await db4.get(`ping1`);
    let ping21 = await db4.get(`ping2`);
    let ping31 = await db4.get(`ping3`);
    let ping41 = await db4.get(`ping4`);
		if(ping11 === null) ping11 = "..."
		if(ping21 === null) ping21 = "..."
		if(ping31 === null) ping31 = "..."
		if(ping41 === null) ping41 = "..."
      scl = ms(bot.uptimea)
          scl5 = ms(bot.uptime)
  let ipti1 = [45, 2312, 33, 44, 234, 66, 77, 886, 6, 45, 7, 234]
   let ipti22 = [434, 234, 234, 44, 55, 66, 77, 886, 234, 234, 7, 89]
   let ipti33 = [434, 2312, 234234, 234, 55,56, 77, 886, 6, 234, 7, 6856]
   let ipti44 = [434, 234, 33, 44, 55, 234, 77, 886, 2343, 2343, 234, 89]
  let pings1 = [10, 4, 6, 8, 9, 7, 3, 13, 12, 15, 17]
  let pings2 = [10, 4, 6, 8, 9, 7, 3, 13, 12, 15, 17]
  let pings3 = [10, 4, 6, 8, 9, 7, 3, 13, 12, 15, 17]
  let pings4 = [10, 4, 6, 8, 9, 7, 3, 13, 12, 15, 17]
let ipti11 = ipti1[Math.floor(Math.random() * ipti1.length)]
  let ipti2 = ipti22[Math.floor(Math.random() * ipti22.length)]
  let ipti3 = ipti33[Math.floor(Math.random() * ipti33.length)]
  let ipti4 = ipti44[Math.floor(Math.random() * ipti44.length)]
  let shardp11 = pings1[Math.floor(Math.random() * pings1.length)]
  let shardp22 = pings2[Math.floor(Math.random() * pings2.length)]
  let shardp33 = pings3[Math.floor(Math.random() * pings3.length)]
  let shardp44 = pings4[Math.floor(Math.random() * pings4.length)]
    shardp1 = (bot.ws.ping-shardp11)
  shardp2 = (bot.ws.ping-shardp22)
  shardp3 = (bot.ws.ping-shardp33)
  shardp4 = (bot.ws.ping-shardp44)
  up1 = bot.uptime + ipti11
  up2 = bot.uptime + ipti2
  up3 = bot.uptime + ipti3
  up4 = bot.uptime + ipti4
  shard1 = ms(up1)
  shard2 = ms(up2)
  shard3 = ms(up3)
  shard4 = ms(up4)
  shardid1 = Math.floor(Math.random() * 400);
  if(shardid1 === 0) shardid1 = 1
  shardid2 = Math.floor(Math.random() * 400);
  if(shardid2 === 0) shardid2 = 1
  shardid3 = Math.floor(Math.random() * 400);
  if(shardid3 === 0) shardid3 = 1
  shardid4 = Math.floor(Math.random() * 400);
  if(shardid4 === 0) shardid4 = 1
                cl1 = ms(cluster11)
                      cl2 = ms(cluster21)
                            cl3 = ms(cluster31)
                                 cl4 = ms(cluster41)
                                  number_1cl = db.fetch("1_cluster") + 13
                                  number_2cl = db.fetch("2_cluster") + 17
                                  number_3cl = db.fetch("3_cluster") + 15+1
                                  number_4cl = db.fetch("4_cluster") + 13+1
    pingscl = "\n\n-  Clusters    |      Servers     |     WS     |   Uptime\n* Cluster 1    |    "+number_1cl+" Servers    |   ~"+ping11+"ms    | "+cl1.days+"d "+cl1.hours+"h "+cl1.minutes+"m "+cl1.seconds+"s\n* Cluster 2    |    "+number_2cl+" Servers    |   ~"+ping21+"ms    | "+cl2.days+"d "+cl2.hours+"h "+cl2.minutes+"m "+cl2.seconds+"s\n* Cluster 3    |    "+number_3cl+" Servers    |   ~"+ping31+"ms    | "+cl3.days+"d "+cl3.hours+"h "+cl3.minutes+"m "+cl3.seconds+"s\n* Cluster 4    |    "+number_4cl+" Servers    |   ~"+ping41+"ms    | "+cl4.days+"d "+cl4.hours+"h "+cl4.minutes+"m "+cl4.seconds+"s\n** Control     |    "+bot.guilds.cache.size.toLocaleString()+" Servers    |   ~"+(bot.ws.ping - 8)+"ms    | "+scl.days+"d "+scl.hours+"h "+scl.minutes+"m "+scl.seconds+"s\n* Shard "+shardid1+"     |    ** Servers    |   ~"+(bot.ws.ping-shardp1)+"ms    | "+shard1.days+"d "+shard1.hours+"h "+shard1.minutes+"m "+shard1.seconds+"s\n* Shard "+shardid2+"     |    ** Servers    |   ~"+(bot.ws.ping-shardp2)+"ms    | "+shard2.days+"d "+shard2.hours+"h "+shard2.minutes+"m "+shard2.seconds+"s\n* Shard "+shardid3+"     |    ** Servers    |   ~"+(bot.ws.ping-shardp3)+"ms    | "+shard3.days+"d "+shard3.hours+"h "+shard3.minutes+"m "+shard3.seconds+"s\n* Shard "+shardid4+"     |    ** Servers    |   ~"+(bot.ws.ping-shardp4)+"ms    | "+shard4.days+"d "+shard4.hours+"h "+shard4.minutes+"m "+shard4.seconds+"s\n** Shard Control     |    ** Servers    |      ~"+bot.ws.ping+"ms       | "+scl5.days+"d "+scl5.hours+"h "+scl5.minutes+"m "+scl5.seconds+"s"
		message.quote("<@"+message.author+">\n```"+pingscl+"```")
}else{
  		 message.channel.startTyping();
		role_color = "BLUE"
	const db = require("quick.db")
	const Database = require("@replit/database")
	const db2 = new Database()
	const Discord = require("discord.js")
	let cluster22 = ["1", "2", "3", "4"]
	 	let cluster = await db2.get(`clusters2222_${message.guild.id}`)
if(cluster === null) {
		 let cluster2 = cluster22[Math.floor(Math.random() * cluster22.length)];
		 		 if(cluster === null) cluster = cluster2
db2.set("clusters2222_"+message.guild.id, cluster2)
}
	cluster_number = db.fetch(cluster+"_cluster_"+message.guild.id)
		if(!cluster_number){
			db.add(cluster+"_cluster", 1)
			db.set(cluster+"_cluster_"+message.guild.id, "foi")
		}
let ping1 = await db2.get(`ping1`);
    let ping2 = await db2.get(`ping2`);
    let ping3 = await db2.get(`ping3`);
    let ping4 = await db2.get(`ping4`);
		if(ping1 === null) ping1 = "0"
				if(ping2 === null) ping2 = "0"
		if(ping3 === null) ping3 = "0"
		if(ping4 === null) ping4 = "0"
		let ping = "0"
if(cluster === "1") ping = ""+ping1+""
if(cluster === "2") ping = ""+ping2+""
if(cluster === "3") ping = ""+ping3+""
if(cluster === "4") ping = ""+ping4+""
 	let shardID = await db2.get(`shard_${message.guild.id}`)
if(shardID === null) {
        let shardnumber = Math.floor(Math.random() * 400)+1;
		 		 if(shardID === null) shardID = shardnumber
db2.set("shard_"+message.guild.id, shardnumber)
}
 	let trunst = await db2.get(`trunst_${message.guild.id}`)
if(trunst === null) {
        let trunst_number = Math.floor(Math.random() * shardID)+1;
		 		 if(trunst === null) trunst = trunst_number
db2.set("trunst_"+message.guild.id, trunst_number)
}
let random_number = [60000,  50000, 40000, 65000, 55000, 45000, 140000, 120000]
		 let number_size = random_number[Math.floor(Math.random() * random_number.length)];
		 ping_info1 = "Muito Ruim"
		  if(Math.round(bot.ws.ping) < 5000) ping_info1 = "Muito Ruim"
		  if(Math.round(bot.ws.ping) < 500) ping_info1 = "Ruim"
		  if(Math.round(bot.ws.ping) < 80) ping_info1 = "Bom"
		 if(Math.round(bot.ws.ping) < 50) ping_info1 = "Exelente"
		 ping_info2 = "Muito Ruim"
		 if(Math.round(ping) < 5000) ping_info2 = "Muito Ruim"
		  if(Math.round(ping) < 500) ping_info2 = "Ruim"
		  if(Math.round(ping) < 80) ping_info2 = "Bom"
		 if(Math.round(ping) < 50) ping_info2 = "Exelente"
		 msg = "**Cluster `"+cluster+"` (📡Shards'ID: `"+trunst+"`/`"+shardID+"`): `"+Math.round(ping)+"`ms (`"+ping_info2+"`).**"
if(!bot.cluster) msg = "> **No momento o Cluster `"+cluster+"` esta offline, mais fiquei de boas o DuiConfig esta operando no lugar dela!**"
	 msg1 = "**Cluster `"+cluster+"` (📡Shards'ID: `...`/`...`): `....`ms.**"
if(!bot.cluster) msg1 = "> **No momento o Cluster `"+cluster+"` esta offline, mais fiquei de boas o DuiConfig esta operando no lugar dela!**"
	 msg2 = "**Cluster `"+cluster+"` (📡Shards'ID: `"+trunst+"`/`"+shardID+"`): `...`ms.**"
if(!bot.cluster) msg2 = "> **No momento o Cluster `"+cluster+"` esta offline, mais fiquei de boas o DuiConfig esta operando no lugar dela!**"
if(!bot.cluster) ping = 0
	var embed1 = new Discord.MessageEmbed()
.setColor(role_color)
	.setTimestamp(Date.now())
	.setTitle("> Ping Pong!")
	.setDescription("```html\n<Carregando Pings...>\n```")
	const m = await message.channel.send("<@"+message.author.id+">", embed1);
	 ping_info3 = "Muito Ruim"
	  ping_info4 = "Muito Ruim"
				 mumber_4 = 0
		 if(ping_info1 === "Bom") mumber_4 = 800
		  if(ping_info1 === "Exelente") mumber_4 = 1000
		 if((m.createdTimestamp - message.createdTimestamp) < 1500) ping_info3 = "Ruim"
		  if((m.createdTimestamp - message.createdTimestamp) < 500) ping_info3 = "Bom"
		 if((m.createdTimestamp - message.createdTimestamp) < 50) ping_info3 = "Exelente"
		 	 if((bot.ping_server) < 1000) ping_info4 = "Ruim"
		  if((bot.ping_server) < 500) ping_info4 = "Bom"
		 if((bot.ping_server) < 50) ping_info4 = "Exelente"
		 if(message.content.includes('-')) {
	db.set("mdssssss_ping", "s")
	}
let mdsssss = (bot.ws.ping - ping)
if(mdsssss === bot.ws.ping) mdsssss = 10
if(mdsssss === ping) mdsssss = 12
//if(mdsssss = message.content.includes('-')) mdsssss = 3
	if(db.fetch("mdssssss_ping") === "s") mdsssss = 3
	if((bot.ws.ping - ping) === -1) mdsssss = 1
	if((bot.ws.ping - ping) === -2)  mdsssss = 2
	if((bot.ws.ping - ping) === -3)  mdsssss = 3
		if((bot.ws.ping - ping) === -4)  mdsssss = 4 
	if((bot.ws.ping - ping) === -5)  mdsssss = 5
	if((bot.ws.ping - ping) === -6)  mdsssss = 6
		if((bot.ws.ping - ping) === -7)  mdsssss =7 
	if((bot.ws.ping - ping) === -8)  mdsssss = 8
	if((bot.ws.ping - ping) === -9)  mdsssss = 9
		if((bot.ws.ping - ping) < -200)  mdsssss = Math.floor(Math.random() * 200)+1
			if((bot.ws.ping - ping) < -100)  mdsssss = Math.floor(Math.random() * 100)+1
				if((bot.ws.ping - ping) < -500)  mdsssss = Math.floor(Math.random() * 500)+1
					if((bot.ws.ping - ping) < -1000)  mdsssss = Math.floor(Math.random() * 1000)+1
						if(bot.ping_server < -5000)  mdsssss = Math.floor(Math.random() * 5000)+1
						
	var embed = new Discord.MessageEmbed()
.setColor(role_color)
	.setTimestamp(Date.now())
	.setTitle("> Ping Pong!")
	.setDescription("**DuiConfig: `"+Math.round(bot.ws.ping)+"`ms (`"+ping_info1+"`).** \n "+msg+" \n **WebServer: `"+(m.createdTimestamp - message.createdTimestamp)+"`ms (`"+ping_info3+"`).** \n **Hospedagem: `"+bot.ping_server+"`ms(`"+ping_info4+"`).**")
	m.edit("<@"+message.author.id+">", embed);
	setTimeout(() => {
	db2.delete("trunst_"+message.guild.id)
	}, number_size)
	 message.channel.stopTyping();
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
	name: "pingt",
	aliases: ["PINGt"]
}