const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix2) => {
		let messageArray = message.content.split(" ");
    let command = messageArray[0];
if(!args[0]){
		var mebed = new Discord.MessageEmbed()
		.setColor("#123456")
		.setTimestamp()
		.setTitle("**Informação Do Comando `"+prefix2+""+command.slice(prefix2.length)+"`:**")
		.setDescription("**Sete Um Canal Para Eu Não Enviar Comandos!**")
		.addField("**Como Usar?**", "**-> `"+prefix2+""+command.slice(prefix2.length)+" <1/10> <idchat>`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" msg <mensagem>`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" lista`.** \n **-> `"+prefix2+""+command.slice(prefix2.length)+" perm <sim/não>`.**")
				.addField("**Permissões:**", "**-> Para Executar Este Comando Precisará Da Permissão `ADMINISTRATOR`!**")
		.addField("**Sinonimos:**", "**-> `"+prefix2+"setchat` | `"+prefix2+"setcanal`.**")
		message.channel.send(mebed).then(async msg => {
   msg.delete(10000)
})
	}
	if(args[0] === "1"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat1 = JSON.parse(fs.readFileSync("./database/bot/idchat1.json", "utf8"));
  if(!idchat1[message.guild.id]){
    idchat1[message.guild.id] = {
      idchat1: "34534346454565645764576"
    };
  }

  let chatid1 = idchat1[message.guild.id].idchat1;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat1[message.guild.id] = {
    idchat1: args[1]
  };

  fs.writeFile("./database/bot/idchat1.json", JSON.stringify(idchat1), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "2"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat2 = JSON.parse(fs.readFileSync("./database/bot/idchat2.json", "utf8"));
  if(!idchat2[message.guild.id]){
    idchat2[message.guild.id] = {
      idchat2: "34534346454565645764576"
    };
  }

  let chatid2 = idchat2[message.guild.id].idchat2;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat2[message.guild.id] = {
    idchat2: args[1]
  };

  fs.writeFile("./database/bot/idchat2.json", JSON.stringify(idchat2), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "3"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
    if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat3 = JSON.parse(fs.readFileSync("./database/bot/idchat3.json", "utf8"));
  if(!idchat3[message.guild.id]){
    idchat3[message.guild.id] = {
      idchat3: "34534346454565645764576"
    };
  }

  let chatid3 = idchat3[message.guild.id].idchat3;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat3[message.guild.id] = {
    idchat3: args[1]
  };

  fs.writeFile("./database/bot/idchat3.json", JSON.stringify(idchat3), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
	console.error(err)
}
}
	if(args[0] === "4"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat4 = JSON.parse(fs.readFileSync("./database/bot/idchat4.json", "utf8"));
  if(!idchat4[message.guild.id]){
    idchat4[message.guild.id] = {
      idchat4: "34534346454565645764576"
    };
  }

  let chatid4 = idchat4[message.guild.id].idchat4;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat4[message.guild.id] = {
    idchat4: args[1]
  };

  fs.writeFile("./database/bot/idchat4.json", JSON.stringify(idchat4), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "5"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat5 = JSON.parse(fs.readFileSync("./database/bot/idchat5.json", "utf8"));
  if(!idchat5[message.guild.id]){
    idchat5[message.guild.id] = {
      idchat5: "34534346454565645764576"
    };
  }

  let chatid5 = idchat5[message.guild.id].idchat5;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat5[message.guild.id] = {
    idchat5: args[1]
  };

  fs.writeFile("./database/bot/idchat5.json", JSON.stringify(idchat5), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "6"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat6 = JSON.parse(fs.readFileSync("./database/bot/idchat6.json", "utf8"));
  if(!idchat6[message.guild.id]){
    idchat6[message.guild.id] = {
      idchat6: "34534346454565645764576"
    };
  }
  let chatid6 = idchat6[message.guild.id].idchat6;
  idchat6[message.guild.id] = {
    idchat6: args[1]
  };
  fs.writeFile("./database/bot/idchat6.json", JSON.stringify(idchat6), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "7"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat7 = JSON.parse(fs.readFileSync("./database/bot/idchat7.json", "utf8"));
  if(!idchat7[message.guild.id]){
    idchat7[message.guild.id] = {
      idchat7: "34534346454565645764576"
    };
  }

  let chatid7 = idchat7[message.guild.id].idchat7;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat7[message.guild.id] = {
    idchat7: args[1]
  };

  fs.writeFile("./database/bot/idchat7.json", JSON.stringify(idchat7), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "8"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat8 = JSON.parse(fs.readFileSync("./database/bot/idchat8.json", "utf8"));
  if(!idchat8[message.guild.id]){
    idchat8[message.guild.id] = {
      idchat8: "34534346454565645764576"
    };
  }

  let chatid8 = idchat8[message.guild.id].idchat8;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat8[message.guild.id] = {
    idchat8: args[1]
  };

  fs.writeFile("./database/bot/idchat8.json", JSON.stringify(idchat8), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "9"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat9 = JSON.parse(fs.readFileSync("./database/bot/idchat9.json", "utf8"));
  if(!idchat9[message.guild.id]){
    idchat9[message.guild.id] = {
      idchat9: "34534346454565645764576"
    };
  }

  let chatid9 = idchat9[message.guild.id].idchat9;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat1[message.guild.id] = {
    idchat1: args[1]
  };

  fs.writeFile("./database/bot/idchat9.json", JSON.stringify(idchat9), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
	if(args[0] === "10"){
	try{
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
	let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	let ids = bot.channels.cache.get(args[1])
if(!ids) return message.channel.send(message.author, enbed)

  let idchat10 = JSON.parse(fs.readFileSync("./database/bot/idchat10.json", "utf8"));
  if(!idchat10[message.guild.id]){
    idchat10[message.guild.id] = {
      idchat10: "34534346454565645764576"
    };
  }

  let chatid10 = idchat10[message.guild.id].idchat10;

//let enbed = new Discord.RichEmbed()
//.setColor("RED")
//.setDescription('**Você Esqueceu de Colocar o ``< #chat | id >``...**')
//if(!ids) return message.channel.send(message.author, enbed)

  idchat10[message.guild.id] = {
    idchat10: args[1]
  };

  fs.writeFile("./database/bot/idchat10.json", JSON.stringify(idchat10), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Não Irei Executar Os Meus Comandos No Canal:**')
  .setDescription('**-> __ '+ ids.name +' __ .**');
  message.channel.send(message.author, sEmbed);
}catch(err){
		let enbed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('**Você Esqueceu de Colocar o `< id >`...**')
	message.reply(enbed)
}
}
if(args[0] === "lista" || args[0] === "list") {
			 let idchat1 = JSON.parse(fs.readFileSync("./database/bot/idchat1.json", "utf8"));
  if(!idchat1[message.guild.id]){
    idchat1[message.guild.id] = {
      idchat1: "Não Setado!"
    };
  }
  let a1 = idchat1[message.guild.id].idchat1;   
		 let idchat2 = JSON.parse(fs.readFileSync("./database/bot/idchat2.json", "utf8"));
  if(!idchat2[message.guild.id]){
    idchat2[message.guild.id] = {
      idchat2: "Não Setado!"
    };
  }
  let a2 = idchat2[message.guild.id].idchat2;   
	 let idchat3 = JSON.parse(fs.readFileSync("./database/bot/idchat3.json", "utf8"));
  if(!idchat3[message.guild.id]){
    idchat3[message.guild.id] = {
      idchat3: "Não Setado!"
    };
  }
  let a3 = idchat3[message.guild.id].idchat3;  
	 let idchat4 = JSON.parse(fs.readFileSync("./database/bot/idchat4.json", "utf8"));
  if(!idchat4[message.guild.id]){
    idchat4[message.guild.id] = {
      idchat4: "Não Setado!"
    };
  }
  let a4 = idchat4[message.guild.id].idchat4;    
	 let idchat5 = JSON.parse(fs.readFileSync("./database/bot/idchat5.json", "utf8"));
  if(!idchat5[message.guild.id]){
    idchat5[message.guild.id] = {
      idchat5: "Não Setado!"
    };
  }
  let a5 = idchat5[message.guild.id].idchat5;  
	 let idchat6 = JSON.parse(fs.readFileSync("./database/bot/idchat6.json", "utf8"));
  if(!idchat6[message.guild.id]){
    idchat6[message.guild.id] = {
      idchat6: "Não Setado!"
    };
  }
  let a6 = idchat6[message.guild.id].idchat6; 
	 let idchat7 = JSON.parse(fs.readFileSync("./database/bot/idchat7.json", "utf8"));
  if(!idchat7[message.guild.id]){
    idchat7[message.guild.id] = {
      idchat7: "Não Setado!"
    };
  }
  let a7 = idchat7[message.guild.id].idchat7;   
	 let idchat8 = JSON.parse(fs.readFileSync("./database/bot/idchat8.json", "utf8"));
  if(!idchat8[message.guild.id]){
    idchat8[message.guild.id] = {
      idchat8: "Não Setado!"
    };
  }
  let a8 = idchat8[message.guild.id].idchat8;   
	 let idchat9 = JSON.parse(fs.readFileSync("./database/bot/idchat9.json", "utf8"));
  if(!idchat9[message.guild.id]){
    idchat9[message.guild.id] = {
      idchat9: "Não Setado!"
    };
  }
  let a9 = idchat9[message.guild.id].idchat9;      
	 let idchat10 = JSON.parse(fs.readFileSync("./database/bot/idchat10.json", "utf8"));
  if(!idchat10[message.guild.id]){
    idchat10[message.guild.id] = {
      idchat10: "Não Setado!"
    }
  }
  let a10 = idchat10[message.guild.id].idchat10;
	let a = "<#"+bot.channels.cache.get(a1)+">"  
	if(a === "<#undefined>") a = "`Canal Não Setado!`"
	let b = "<#"+bot.channels.cache.get(a2)+">"  
	if(b === "<#undefined>") b = "`Canal Não Setado!`"
	let c = "<#"+bot.channels.cache.get(a3)+">" 
	if(c === "<#undefined>") c = "`Canal Não Setado!`"
	let d = "<#"+bot.channels.cache.get(a4)+">"
	if(d === "<#undefined>") d = "`Canal Não Setado!`"
	let e = "<#"+bot.channels.cache.get(a5)+">" 
	if(e === "<#undefined>") e = "`Canal Não Setado!`"
	let f = "<#"+bot.channels.cache.get(a6)+">" 
	if(f === "<#undefined>") f = "`Canal Não Setado!`"
	let g = "<#"+bot.channels.cache.get(a7)+">"
	if(g === "<#undefined>") g = "`Canal Não Setado!`"
	let h = "<#"+bot.channels.cache.get(a8)+">"
	if(h === "<#undefined>") h = "`Canal Não Setado!`"
	let i = "<#"+bot.channels.cache.get(a9)+">"
	if(i === "<#undefined>") i = "`Canal Não Setado!`"
	let j = "<#"+bot.channels.cache.get(a10)+">"  
	if(j === "<#undefined>") j = "`Canal Não Setado!`"

	var enbed = new Discord.MessageEmbed()
	.setColor("BLUE")
	.setTimestamp()
	.setTitle("Onde Eu Não Posso Executar Comandos:")
	.setDescription("**1 - "+a+"** \n**2 - "+b+"** \n**3 - "+c+"** \n**4 - "+d+"** \n**5 - "+e+"** \n**6 - "+f+"** \n**7 - "+g+"** \n**8 - "+h+"** \n**9 - "+i+"** \n**10 - "+j+"**")
	message.channel.send(enbed)
}
if(args[0] === "msg" || args[0] === "mensagem"){
		let perms = bot.users.cache.get("518862457876250625") || message.member.hasPermission("ADMINISTRATOR")
  
		 let msgchat2 = JSON.parse(fs.readFileSync("./database/bot/msgchat.json", "utf8"));
  if(!msgchat2[message.guild.id]){
    msgchat2[message.guild.id] = {
      msgchat2: "Ops! Eu não posso enviar comandos aqui!"
    };
  }
  let msg1chat2 = msgchat2[message.guild.id].msgchat; 
	if (msg1chat2 === undefined) msg1chat2 = "Ops! Eu não posso enviar comandos aqui!"  
	let enbed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription('**Mensagem de Aviso:** \n ```\n'+msg1chat2+'\n``` \n \n > **Para Mudar A Mensagem Use `'+prefix2+'setchat msg <mensagem>`!** ')
	let msg = args.slice(1).join(" ")
if(!msg) return message.channel.send(message.author, enbed)
if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.reply("`Você não possuí permissão para isto.`");
  let msgchat = JSON.parse(fs.readFileSync("./database/bot/msgchat.json", "utf8"));
  if(!msgchat[message.guild.id]){
    msgchat[message.guild.id] = {
      msgchat: "Ops! Eu não posso enviar comandos aqui!"
    };
  }
  let msgchat1 = msgchat[message.guild.id].msgchat;
  msgchat[message.guild.id] = {
    msgchat: msg
  };
  fs.writeFile("./database/bot/msgchat.json", JSON.stringify(msgchat), (err) => {
    if (err) console.log(err)
  });
  let sEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
  .setTitle('**Mensagem Que Eu Mostrarei Onde Eu Não Posso Executar Comandos:**')
  .setDescription('**```\n'+msg+'\n```**');
  message.channel.send(message.author, sEmbed);
}
if(args[0] === "perm" || args[0] === "perms" || args[0] === "permissão" || args[0] === "permissao"){
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não e Administrador do servidor para usar este comando!")
	const db = require("quick.db")
	if(!args[1]) return message.reply("Uso incorreto! \n > `"+prefix2+"setchat perm <sim/não>`.")
	if(args[1] === "sim" || args[1] === "s" || args[1] === "yes"){
	db.set("config.setchat.guild_"+message.guild.id+".perm", "s")
		return message.reply("Agora os Adiministradores terão permissão de executar comandos em todos os canais!")
	}
		if(args[1] === "não" || args[1] === "nao" || args[1] === "no" || args[1] === "n"){
		db.delete("config.setchat.guild_"+message.guild.id+".perm")
		return message.reply("Agora os Adiministradores não poderão executar os comandos nos canais do `"+prefix2+"setchat lista`!")
	}
}
}
module.exports.help = {
  name: "setchat",
	aliases: ["setcanal", "set-chat", "set-canal", "SETCHAT", "SETCHANNEL"]
}