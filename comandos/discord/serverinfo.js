exports.run = async (bot, message,args) => {
const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');
const nodemon = require("nodemon")
const Database = require("@replit/database")
const db = new Database()
const db2 = require("quick.db")
		let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
       server = message.guild
          if(!args[0]) server = message.guild
          if(args[0]) server =  bot.guilds.cache.get(args[0])
          if(!server) return message.quote("<@"+message.author+">, Vish, eu acho que o servidor não existe ou eu ainda não tive a oportunidade de conhece-lo!")
          nome = server.name
          id = server.id
          avatar = server.iconURL()
          criado = "**<t:"+moment(server.createdAt).format('X')+"> (<t:"+moment(server.createdAt).format('X')+":R>).**"
          	let shardID = await db.get(`shard_${server.id}`)
if(shardID === null) {
        let cluster2 = Math.floor(Math.random() * 400)+1;
		 		 if(shardID === null) shardID = cluster2
db.set("shard_"+server.id, cluster2)
}
	 	let cluster = await db.get(`clusters2222_${server.id}`)
		 let cluster22 = ["1", "2", "3", "4"]
if(cluster === null) {
		 let cluster2 = cluster22[Math.floor(Math.random() * cluster22.length)];
		 		 if(cluster === null) cluster = cluster2
db.set("clusters2222_"+server.id, cluster2)
}
	cluster_number = db2.fetch(cluster+"_cluster_"+message.guild.id)
		if(!cluster_number){
			db2.add(cluster+"_cluster", 1)
			db2.set(cluster+"_cluster_"+server.id, "foi")
		}
      let canaistexto = server.channels.cache.filter(a => a.type === "text").size;
		let caregorias = server.channels.cache.filter(a => a.type === "category").size;
    let canaisvoz = server.channels.cache.filter(a => a.type === "voice").size;
		    let canaisnews = server.channels.cache.filter(a => a.type === "news").size;
		let totalchats = server.channels.cache.size
  var total = server.members.cache.size
	var online = server.members.cache.filter(member => member.user.presence.status === "online").size
	var offline = server.members.cache.filter(member => member.user.presence.status === "offline").size
	var ocupado = server.members.cache.filter(member => member.user.presence.status === "dnd").size
	var ausente = server.members.cache.filter(member => member.user.presence.status === "idle").size
	var cargos = server.roles.cache.size
	var emojis = server.emojis.cache.size
  var banner = server.bannerURL() || server.splashURL()
	var donoid = server.ownerID
  var donotag = bot.users.cache.get(""+donoid+"").tag
	var afk = "<#"+server.afkChannel+">"
	if(!server.afkChannel) afk = "`Sem canal AFK`"
 afk_time = ". \n Tempo Inativo: `"+server.afkTimeout / 60+"` Minutos"
		if(afk_time === ". \n Tempo Inativo: `60` Minutos") afk_time = ". \n Tempo Inativo: `1` Hora"
	if(server.afkChannel === null) afk_time = ""
var bots = server.members.cache.filter(m => m.user.bot).size
ChannelUpdates = "`Recurso não Ativado`"
	if(server.publicUpdatesChannel) ChannelUpdates = "<#"+server.publicUpdatesChannel.id+"> (``"+server.publicUpdatesChannel.name+"``)"
  embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTimestamp()
.setThumbnail(avatar)
.setImage(banner)
.setTitle("**Informações do `"+nome+"`.**")
.addField("**Shard ID:**", "**Shard ID `"+shardID+"` - DuiConfig `Cluster"+cluster+"`.**")
.addField("**ID:**", "**`"+id+"`.**", true)
.addField("**Fundador:**", "**`"+donotag+"`**",true)
.addField("**Canal AFK:**", "**"+afk+""+afk_time+".**")
.addField("**Discord Updates:**", "**<a:Dui_Anuncios:597067838687150099> "+ChannelUpdates+".**")
.addField("**Criado em:**", criado, false)
.addField("**Membros [`"+total+"`]:**", "**<:online:777980445644029974> Online: `"+online.toLocaleString()+"`.** \n **<:ocupado:777980290726887436> Não Pertube: `"+ocupado.toLocaleString()+"`.** \n **<:ausente:777980351804211230> Ausente: `"+ausente.toLocaleString()+"`.** \n **<:off:777980398780153906> Offline: `"+offline.toLocaleString()+"`.** \n **<:bot:744026200854364303>  Bots: `"+bots.toLocaleString()+"`.** \n **👥 Pessoas: `"+(server.members.cache.size - bots).toLocaleString()+"`**")
.addField("**Canais [`"+totalchats+"`]:**","**📄 `"+canaistexto.toLocaleString()+"` Canais De Textos.** \n **🔊 `"+canaisvoz.toLocaleString()+"` Canais De Voz.** \n **🎟 `"+caregorias+"` Categorias.** \n **<a:mega_fone:566446381112360980> `"+canaisnews.toLocaleString()+"` Canais De Novidades.**")
.addField("**Cargos:**", "**🎫 `"+cargos.toLocaleString()+"` Cargos.**",true)
.addField("**Emojis:**", "**😜 `"+emojis.toLocaleString()+"` Emojis.**", true)
if(server.description){
  embed.setDescription("> **Descrição do Servidor.**\n"+server.description)
}
message.reply(embed)
    } catch (err) {
	error = new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setTitle("**Falha ao Executar o Comando.**")
.setDescription("> **O comando `t!"+(command.slice("t!"))+"` deu erro interno!** \n \n **Querendo denunciar o erro? Entre no meu [Servidor de Suporte](https://discord.gg/w6uZyBu) e denuncie no chat `#bugs`, se possível com prints!** \n\n```js\n"+err+"\n```")
message.quote("<@"+message.author+">", error)
}
}
exports.help = {
  name: "serverinfo", aliases: ["server", "servidor"]
}