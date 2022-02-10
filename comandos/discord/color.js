const convert = require('color-convert');
const Discord = require("discord.js")
 module.exports.run = async (client, message, suffix, args, prefix2) => {
	 	try{
	 try{
	if(!suffix[0]) return	message.channel.send("**Coloque Uma Cor, Tipo `#fafafa`...**")
  if (!/^#?[0-9a-fA-F]{6}$/.test(suffix[0])) {
 
  }
var embed = new Discord.MessageEmbed()
.setColor(`#${suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0]}`)
.setTimestamp()
.setThumbnail(`https://dummyimage.com/250/${suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0]}/&text=%20`)
.setTitle("")
.addField("**HEX:**", "**-> `#"+(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**RGB:**", "**-> `"+convert.hex.rgb(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**CMYK:**", "**-> `"+convert.hex.cmyk(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**HSL:**", "**-> `"+convert.hex.hsl(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**HSV:**", "**-> `"+convert.hex.hsv(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**HWB:**", "**-> `"+convert.hex.hwb(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**LAB:**", "**-> `"+convert.hex.lab(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**ANSI16:**", "**-> `"+convert.hex.ansi16(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**ANSI256:**", "**-> `"+convert.hex.ansi256(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**XYZ:**", "**-> `"+convert.hex.xyz(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**HCG:**", "**-> `"+convert.hex.hcg(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**Apple:**", "**-> `"+convert.hex.apple(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**Gray:**", "**-> `"+convert.hex.gray(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
.addField("**CSS Keyword (Approx.):**", "**-> `"+convert.hex.keyword(suffix[0].includes('#') ? suffix[0].split('#').slice(1).join() : suffix[0])+"`.**")
message.channel.send(embed)
}catch(err) {message.channel.send("**Ops! Sera Que Esta Faltando Algo? Tipo `#` No Começo!?**")}
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
  name: "color",
	aliases: ["cor", "COR", "COLOR"]
}