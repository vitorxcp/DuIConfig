const Discord = require("discord.js")
exports.run = async (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
	try{
	user = message.mentions.members.first() || bot.users.cache.get(args[0])
let hug = [
    "https://data.whicdn.com/images/221692186/original.gif",
    "http://mrwgifs.com/wp-content/uploads/2013/04/Ouran-High-School-Host-Club-Love-Hug-Gif.gif",
    "http://images6.fanpop.com/image/photos/33100000/Kyoya-and-Tamaki-ouran-high-school-host-club-33132917-500-375.gif",
    "http://31.media.tumblr.com/4d6525e7b5e546cde555bf2453563335/tumblr_mskyp8XJcb1r40gm7o1_1280.gif",
    "https://i.pinimg.com/originals/34/dc/98/34dc98f17fd5cf558611f14ff9a0c1c9.gif",
    "https://78.media.tumblr.com/6bef64140dfefe6fe86089c6eb11fb9b/tumblr_ohhnjyDJll1vm2xpgo1_500.gif",
    "https://78.media.tumblr.com/806c23dbcf9bde033e708c8679c63975/tumblr_inline_ohhtig3BpF1rz9r19_540.gif",
    "https://i.pinimg.com/originals/0f/48/1b/0f481bfc59229ce8127f2aba52bb8f4a.gif",
    "https://pa1.narvii.com/6276/4461c2a865973bddcc5f4e591a165e09275c7a2c_hq.gif",
    "https://78.media.tumblr.com/7e29c1e560c527de00a9f57bb7d941c3/tumblr_inline_ohi8745BbI1u9qbij_540.gif",
    "https://data.whicdn.com/images/271163043/original.gif",
    "https://78.media.tumblr.com/d00aba2e25ac11a11d9c5a770275dfc8/tumblr_orpdyc83FN1rtwid9o1_500.gif",
    "http://0.media.dorkly.cvcdn.com/33/43/cac85de1cfd2bc4e7bec36631b260156.gif",
    "https://i.pinimg.com/originals/22/8a/c9/228ac960b7c24ffb87374857fa6a0920.gif",
    "https://pa1.narvii.com/6333/8c254b88d099c03be84769075ecac875c5dbb4bb_hq.gif",
    "https://pa1.narvii.com/6449/c5383d0a548987d69aac06e8dc9b270219159b3f_hq.gif",
    "https://media1.tenor.com/images/100c453c2f411189b40e6931ff65a88b/tenor.gif?itemid=7210521",
    "https://i.pinimg.com/originals/e5/0e/c8/e50ec889ef64432e5d4648370014d272.gif",
    "https://78.media.tumblr.com/94f62f2fbca608f70a48e6c04c2dc27c/tumblr_orotkrEC4t1vbbkedo2_540.gif",
    "http://i0.kym-cdn.com/photos/images/original/001/266/481/075.gif",
    "https://data.whicdn.com/images/310192271/original.gif",
    "https://78.media.tumblr.com/064596e2fb0101675b89d79ac41141e0/tumblr_p8g2jmxCLD1qc9mvbo1_540.gif",
]
hug_image = Math.floor((Math.random() * hug.length));
if (!args[0]) {
embed = new Discord.MessageEmbed()
.setColor("#000000")
.setTitle("**`"+message.author.username+"` Abraçou-se A Si Mesmo... ___`#TáNaSeca`___**")
.setImage("https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif")
return message.reply(embed)
}
user_id2 = bot.users.cache.get(args[0]) || message.mentions.members.first()
user_id = user_id2.id
if (user_id === message.author.id) {
	embed = new Discord.MessageEmbed()
.setColor("#000000")
.setTitle("**`"+message.author.username+"` Abraçou-se A Si Mesmo... ___`#TáNaSeca`___**")
.setImage("https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif")
return message.reply(embed)
}
if (user) {
	colors = {
		online: "GREEN",
		dnd: "BLUE",
		idle: "#88f366",
		offline: "#00fff1"
	}
	status = user.presence.status
	member = message.mentions.members.first().user.username || bot.users.cache.get(args[0]).username
	status_color = colors[status]
    const hembed = new Discord.MessageEmbed()
        .setColor(status_color)
        .setTitle("**`"+message.author.username+"` Acabou De Abraçar __`"+member+"`__. ___`#MITOOO`___**")
        .setImage(hug[hug_image])
    message.channel.send({
        embed: hembed
    })
    return;
}

embed = new Discord.MessageEmbed()
.setColor("#000000")
.setTitle("**`"+message.author.username+"` Abraçou-se A Si Mesmo... ___`#TáNaSeca`___**")
.setImage("https://media3.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif")
 message.reply(embed)
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
	name: "abraçar",
	aliases: ["abracar", "ABRACAR", "ABRAÇAR", "hug", "HUG"]
}