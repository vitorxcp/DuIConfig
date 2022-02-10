exports.run = async (bot,message,args,prefix2)=> {
const Database = require("@replit/database")
const db = new Database()
voteuser = await db.get("topgg_"+message.author.id+"_vote")
if(!voteuser) voteuser = 0
	let topgg_vote = await db.get("topgg_vote")
		if(!topgg_vote) topgg_vote = "0"
const Discord = require("discord.js")
embed = new Discord.MessageEmbed()
.setThumbnail(bot.user.avatarURL())
.setTimestamp()
.setColor("BLUE")
.setTitle("**DuiConfig Votações em Top.gg!**")
.setDescription("Opa, querendo ajudar o `Duizin` aqui no Discord? Então vote nele no [Top.gg](https://top.gg/bot/"+bot.user.id+"/vote), isto ajuda ele a crecer acada vez mais!\n Há e e claro que você tambem ganha reconpensas no Bot!\n\n> **Ganho de `800` coins por cada voto!**")
.setFooter("Total de votos por você: "+voteuser+" votos. - DuiConfig tem "+topgg_vote+" votos no total.")
const disbut = require("discord.js-buttons");
   let vote = new disbut.MessageButton()
  .setStyle('url')
  .setURL("https://top.gg/bot/"+bot.user.id+"/vote")
   .setLabel('Votar') 
message.channel.send("<@"+message.author+">", {
   buttons: [vote], embed: embed
})
}
exports.help = {
  name:"vote", 
  aliases:["votar", "Vote", "VOTE"]
}