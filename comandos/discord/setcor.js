discord = require("discord.js")
db = require("quick.db")
exports.run = async (bot,message,args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
        let messageArray = message.content.split(" ");
    let command = messageArray[0];
    if(!args[0]){
        var mebed = new Discord.MessageEmbed()
        .setColor("#123456")
        .setTimestamp()
        .setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
        .setDescription("**Sete Uma Cor Para O `"+prefix2+"perfil`!**")
        .addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" #fafafa`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" fafafa`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" WHITE`.**")
        .addField("**Permissões:**", "**-> `Nenhuma`!**")
        .addField("**Sinonimos:**", "**-> `"+prefix2+"setcor` | `"+prefix2+"setcolor` | `"+prefix2+"setarcolor` | `"+prefix2+"setarcor`.**")
        message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
return;
}

db.set("color_"+message.author.id, args[0])
setTimeout(() => {
	try{
embed = new discord.MessageEmbed()

.setColor(db.fetch("color_"+message.author.id))
.setDescription("**Cor Setada Com Sucesso, Use `"+prefix2+"perfil` Para Ver Como Esta!**")
.setTimestamp()
message.channel.send(message.author, embed)
}catch(err){
return	message.reply("Erro: "+err)
}
}, 500)
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
name: "setcor",
aliases: ["setarcor", "setcolor", "setarcolor"]
}