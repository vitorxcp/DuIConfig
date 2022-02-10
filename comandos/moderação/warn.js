const Discord = require("discord.js")
 db = require("quick.db")
exports.run = async (bot, message, args, prefix2) => {
				let messageArray = message.content.split(" ");
    let command = messageArray[0];
	if(!args[0]){
		var mebed = new Discord.MessageEmbed()
		.setColor("#123456")
		.setTimestamp()
		.setTitle("**Informação Do Comando ``"+prefix2+""+command.slice(prefix2.length)+"``:**")
		.setDescription("**Avise Aquela Pessoa, Para Ela Não Fazer De Novo!**")
		.addField("**Como Usar?**", "**-> ``"+prefix2+""+command.slice(prefix2.length)+" @DuiConfig flood/span no #"+message.channel.name+"``.** \n **-> ``"+prefix2+""+command.slice(prefix2.length)+" 552086755956883456 flood/span no #"+message.channel.name+"``.** ")
		.addField("**Permissões:**", "**-> Para Executar Este Comando Precisará Da Permissão ``ADMINISTRATOR``!**")
		.addField("**Sinonimos:**", "**-> ``"+prefix2+"warn`` | ``"+prefix2+"aviso``.**")
		message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
return;
}
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`**VOCÊ NÃO TEM PERMISSÃO PARA USAR ESSE COMANDO!**`)
if(message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])) === null) return message.reply("Usuario Não Encontrado, Tente Mencionar Ele!")
user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])).user
	  if(!user) return message.reply("Usuario Não Encontrado, Tente Mencionar Ele!")
		  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
		if(user.id === message.author.id || user === message.author || user === "<@"+message.author.id+">" || user === "<@!"+message.author.id+">" || user.id === ""+message.author.id+"") return message.reply("Ops, Você Não Pode Punir Você Mesmo!")
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("Eu Não Posso Punir Este Usuario!") 
	motivo = args.slice(1).join(" ")
	if(!motivo) return message.reply("Por Favor, Deixe Seu Motivo!")
		const ping = new Date();
		ping.setHours(ping.getHours() - 3);
			let mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
			let diadasemana = '❌';
			const dia = ping.getDate();
			const mess = mes[ping.getMonth()];
			const ano = ping.getFullYear();
			const hora = ping.getHours();
			const minutos = ping.getMinutes();
			data = dia+" de "+mess+" de "+ano+" ás "+hora+":"+minutos
	embed = new Discord.MessageEmbed()
	.setColor("RED")
	.setTimestamp()
.setTitle("**Aviso do Servidor ``"+message.guild.name+"``:**")
.setDescription("> **Você Foi Avisado!** \n ** Punido Por: ``"+message.author.tag+"``(``"+message.author.id+"``).** \n **Motivo: ``"+motivo+"``.** \n **Data: ``"+data+"``.**")
push = db.fetch("guild22_"+message.guild.id+".warn22_"+message.author.id)
if(!push === undefined) db.set("guild22_"+message.guild.id+".warn22_"+user.id, ["** Punido Por: ``"+message.author.tag+"``(``"+message.author.id+"``).** \n **Motivo: ``"+motivo+"``.** \n **Data: ``"+data+"``.** \n  "])
if(push === undefined) db.push("guild22_"+message.guild.id+".warn22_"+user.id, "** Punido Por: ``"+message.author.tag+"``(``"+message.author.id+"``).** \n **Motivo: ``"+motivo+"``.** \n **Data: ``"+data+"``.** \n ")
if(!push === null) {db.set("guild22_"+message.guild.id+".warn22_"+user.id, ["** Punido Por: ``"+message.author.tag+"``(``"+message.author.id+"``).** \n **Motivo: ``"+motivo+"``.** \n **Data: ``"+data+"``.** \n  "])}
if(push === null) {db.push("guild22_"+message.guild.id+".warn22_"+user.id, "** Punido Por: ``"+message.author.tag+"``(``"+message.author.id+"``).** \n **Motivo: ``"+motivo+"``.** \n **Data: ``"+data+"``.** \n ")}
user.send(embed)
message.channel.send("<:Panda_Policial:589826575797846026> - "+message.author+" Usuario Avisado Com Sucesso!")
}
exports.help = {
	name: "warn",
	aliases: ["WARN", "aviso", "AVISO"]
}
