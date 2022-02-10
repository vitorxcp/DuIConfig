const Discord = require("discord.js");
exports.run = async (client, message, args, prefix2) => {
		if(message.author.id != "518862457876250625") return message.reply("este comando está Desativado para Manutenção!")
		let messageArray = message.content.split(" ");
    let command = messageArray[0];
	if(!args[0]){
		var mebed = new Discord.MessageEmbed()
		.setColor("#123456")
		.setTimestamp()
		.setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
		.setDescription("**Vendo Aquele Chat Poluido De Mensagens? Que Tal Apagar...**")
		.addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" 100`.**")
		.addField("**Permissões:**", "**-> Para Executar Este Comando Precisará Da Permissão `MANAGE_MESSAGES`!**")
		.addField("**Sinonimos:**", "**-> `"+prefix2+"limpar` | `"+prefix2+"clear`.**")
		message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
	} 
	if(args[0]){
		if(!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.reply("`Você não possuí permissão para isto.`");
	var embed3 = new Discord.MessageEmbed()
	.setColor("RED")
	.setTimestamp()
	.setTitle("**ERRO!**")
	.setDescription("**Especifique O Valor Para O Chat Ser Limpo!** \n \n > **Minimo `1`, Maximo `100`!**")
     const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 0 || deleteCount > 100)
        return message.reply(embed3).then(async msg => {
   msg.delete(8000)
 msg.react("❌")
});
    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    var embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTimestamp()
	//	.setTitle("**O ``"+message.channel.name+"`` Foi Limpo!**")
    .setDescription("**`🗑` - O Chat `"+message.channel.name+"` Foi Limpo Com Sucesso Por "+message.author+"!**")
    message.channel.send(embed).then(async msg => {
   msg.delete(10000)
 msg.react("🗑")
})
    message.channel.bulkDelete(args[0])
        .catch(err => message.channel.send("☹ - Erro ao executar o comando: `"+err+"`!"));
}
}

exports.help = {
    name: "limpar",
		aliases: ["clear"]
}