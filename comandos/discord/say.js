const discord = require("discord.js")
exports.run = (bot,message,args)=> {
	if(!args[0]) return message.reply("Escreva algo...")
	let msg = args.join(" ")
	message.quote(msg +" \n > *Comando executado por: <@"+message.author+">!* ")
}
exports.help = {
	name: "say", aliases: ["falar", "message", "messagem", "SAY", "FALAR"]
}