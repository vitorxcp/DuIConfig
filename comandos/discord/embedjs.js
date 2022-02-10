exports.run = async (bot,message,args) => {
const dc = require("discord.js")
  embed = new dc.MessageEmbed()
  .setTimestamp()
  .setColor("BLUE")
.setTitle("**EMBED JS:**")
.setDescription("```js\n"+args.join(" ")+"\n```")
message.quote("<@"+message.author+">", embed)
}
exports.help = {
name:"embedjs",
  aliases:["js", "bdjs"]
}