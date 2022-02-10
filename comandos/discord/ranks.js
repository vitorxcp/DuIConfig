const Discord = require('discord.js');
const meuSet = new Set();
const meuSet4 = new Set();
exports.run = async (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
	 message.channel.startTyping();
	const firebase = require("firebase")
      const database = firebase.database();
    let amigo = message.mentions.users.first() || message.author;
    const db = await database.ref(`DuiConfig/Levels/${message.guild.id}`).once('value');
		const db4 = await database.ref(`DuiConfig/Levels`).once('value');
		const db2 = await database.ref(`DuiConfig/Levels/Global`).once('value');
		const db3 = require("quick.db")
    const array = Object.keys(db.val());
		const array2 = Object.keys(db2.val());
				const array4 = Object.keys(db2.val());
    if(!args[0]){
			 array.forEach((e) => { 
        let infoMembro = {
            id: `${e}`, level: db.val()[e].level, xp: db.val()[e].xp
        };
        meuSet.add(infoMembro)
    });
     let pe = Array.from(meuSet);
     let xy = pe.sort(function (a, b) {
         if (a.level < b.level) {
           return 1;
         }
         if (a.level > b.level) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = "> **Sua posição: #`"+(indice+1)+"`.**"
         }
     })
     let x = [];
		 mumber = 10
if(args[1] = 2) mumber = 20
if(args[1] = 3) mumber = 30
if(args[1] = 4) mumber = 40
if(args[1] = 5) mumber = 50
if(args[1] = 6) mumber = 60
if(args[1] = 7) mumber = 70
if(args[1] = 8) mumber = 80
if(args[1] = 9) mumber = 90
if(args[1] = 10) mumber = 100
     if (xy.length >= 10) {
         for (y = 0; y < 10; y++) {
             let level = xy.slice(y, y+1).map(a => a.level)-1;
						 //if(level = "-1") level = "0"
						   let xp = xy.slice(y, y+1).map(a => a.xp);
             let id = String(xy.slice(y, y+1).map(a => a.id));
 let nussa = "[Level: `"+level.toLocaleString()+"`/XP: `"+xp.toLocaleString()+"`]"
 let ab = "**#`"+(y+1)+"`. <@"+bot.users.cache.get(id)+"> - "+nussa+".**\n"
 if(ab === "**#`"+(y+1)+"`. <@undefined> - "+nussa+".**\n") ab = ""
             x += ab
					//	 if(x === `**${y+1}**. undefined [Level: 0].\n`) x += ""
         }
     } else {
         for (y = 0; y < xy.length; y++) {
              let xp = xy.slice(y, y+1).map(a => a.xp);
            let level = xy.slice(y, y+1).map(a => a.level)-1;
				//		 if(level = "-1") level = "0"
             let id = xy.slice(y, y+1).map(a => a.id);
 
 let nussa = "[Level: `"+level.toLocaleString()+"`/XP: `"+xp.toLocaleString()+"`]"
 let ab = "**#`"+(y+1)+"`. <@"+String(id)+"> - "+nussa+".**\n"
 if(ab === "**#`"+(y+1)+"`. <@undefined> - "+nussa+".**\n") ab = ""
             x += ab
						
						         }
     }
 let  ab3 = "**Paginas `1`/`10`.**"
 let x1 = ab3
     const embed = new Discord.MessageEmbed()
		 .setTitle("Rank Do Servidor:")
     .setDescription(`${x1}\n${x}\n${suaPosicao}`)
     .setColor("BLUE");
     message.quote(message.author, embed);
  message.channel.stopTyping();
     meuSet.clear();
		}
		if(args[0] === "1" || args[0] === "2" || args[0] === "3" || args[0] === "4" || args[0] === "5" || args[0] === "6" || args[0] === "7" || args[0] === "8" || args[0] === "9" || args[0] === "10"){
			 array.forEach((e) => { 
        let infoMembro = {
            id: `${e}`, level: db.val()[e].level, xp: db.val()[e].xp
        };
        meuSet.add(infoMembro)
    });

     let pe = Array.from(meuSet);
     let xy = pe.sort(function (a, b) {
        if (a.level < b.level) {
           return 1;
         }
         if (a.level > b.level) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = "> **Sua posição: #`"+(indice+1)+"`.**"
         }
     })
     let x = [];
		 mumber = 10
if(args[0] === "2") mumber = 20
if(args[0] === "3") mumber = 30
if(args[0] === "4") mumber = 40
if(args[0] === "5") mumber = 50
if(args[0] === "6") mumber = 60
if(args[0] === "7") mumber = 70
if(args[0] === "8") mumber = 80
if(args[0] === "9") mumber = 90
if(args[0] === "10") mumber = 100
		 mumber1 = 0
if(args[0] === "2") mumber1 = 10
if(args[0] === "3") mumber1 = 20
if(args[0] === "4") mumber1 = 30
if(args[0] === "5") mumber1 = 40
if(args[0] === "6") mumber1 = 50
if(args[0] === "7") mumber1 = 60
if(args[0] === "8") mumber1 = 70
if(args[0] === "9") mumber1 = 80
if(args[0] === "10") mumber1 = 90

     if (xy.length >= mumber) {
         for (y = mumber1; y < mumber; y++) {
             let level = xy.slice(y, y+1).map(a => a.level)-1;
						 //if(level = "-1") level = "0"
						   let xp = xy.slice(y, y+1).map(a => a.xp);
             let id = String(xy.slice(y, y+1).map(a => a.id));
 let nussa = "[Level: `"+level.toLocaleString()+"`/XP: `"+xp.toLocaleString()+"`]"
 let ab = "**#`"+(y+1)+"`. <@"+bot.users.cache.get(id)+"> - "+nussa+".**\n"
 if(ab === "**#`"+(y+1)+"`. <@undefined> - "+nussa+".**\n") ab = ""
             x += ab
					//	 if(x === `**${y+1}**. undefined [Level: 0].\n`) x += ""
         }
     } else {
         for (y = mumber1; y < xy.length; y++) {
              let xp = xy.slice(y, y+1).map(a => a.xp);
            let level = xy.slice(y, y+1).map(a => a.level)-1;
				//		 if(level = "-1") level = "0"
             let id = xy.slice(y, y+1).map(a => a.id);
 
 let nussa = "[Level: `"+level.toLocaleString()+"`/XP: `"+xp.toLocaleString()+"`]"
 let ab = "**#`"+(y+1)+"`. <@"+String(id)+"> - "+nussa+".**\n"
 if(ab === "**#`"+(y+1)+"`. <@undefined> - "+nussa+".**\n") ab = ""
             x += ab
						         }
     }
 let  ab3 = "**Paginas `"+args[0]+"`/`10`.**"
 let x1 = ab3
     const embed = new Discord.MessageEmbed()
		 .setTitle("Rank Do Servidor:")
     .setDescription(`${x1}\n${x}\n${suaPosicao}`)
     .setColor("BLUE");
     message.quote(message.author, embed);
  message.channel.stopTyping();
     meuSet.clear();
		}
		if(args[0] === "global" || args[0] === "geral" || args[0] === "xp" || args[0] === "level"){
			let globnoss = await message.channel.send("<@"+message.author.id+">, Carregando Rank Global, Aguarde...")
						message.channel.startTyping()
			 array2.forEach((e) => {  
        let infoMembro4 = {
            id: `${e}`, level: db2.val()[e].level, xp: db2.val()[e].xp
        };
        meuSet4.add(infoMembro4)
    });

     let pe = Array.from(meuSet4);
     let xy = pe.sort(function(a, b) {
     	if(a.level < b.level) {
           return 1;
         }
         if (a.level > b.level) {
           return -1;
         }
         return 0;
     });

     let suaPosicao;
     xy.forEach(async function (membro, indice){
         if (membro.id == message.author.id) {
             suaPosicao = "> **Sua posição: #`"+(indice+1)+"`.**"
         }
     })
     let x = [];
		 mumber = 10
if(args[1] === "2") mumber = 20
if(args[1] === "3") mumber = 30
if(args[1] === "4") mumber = 40
if(args[1] === "5") mumber = 50
if(args[1] === "6") mumber = 60
if(args[1] === "7") mumber = 70
if(args[1] === "8") mumber = 80
if(args[1] === "9") mumber = 90
if(args[1] === "10") mumber = 100
		 mumber1 = 0
if(args[1] === "2") mumber1 = 10
if(args[1] === "3") mumber1 = 20
if(args[1] === "4") mumber1 = 30
if(args[1] === "5") mumber1 = 40
if(args[1] === "6") mumber1 = 50
if(args[1] === "7") mumber1 = 60
if(args[1] === "8") mumber1 = 70
if(args[1] === "9") mumber1 = 80
if(args[1] === "10") mumber1 = 90
     if (xy.length >= mumber) {
         for (y = mumber1; y < mumber; y++) {
             let level = xy.slice(y, y+1).map(a => a.level)-1;
						 //if(level = "-1") level = "0"
						   let xp = xy.slice(y, y+1).map(a => a.xp);
             let id = String(xy.slice(y, y+1).map(a => a.id));
 let nussa = "[Level: `"+level.toLocaleString()+"`/XP: `"+xp.toLocaleString()+"`]"
 let ab = "**#`"+(y+1)+"`. <@"+bot.users.cache.get(id)+"> - "+nussa+".**\n"
 if(ab === "**#`"+(y+1)+"`. <@undefined> - "+nussa+".**\n") ab = ""
             x += ab
					//	 if(x === `**${y+1}**. undefined [Level: 0].\n`) x += ""
         }
     } else {
         for (y = mumber1; y < xy.length; y++) {
              let xp = xy.slice(y, y+1).map(a => a.xp);
            let level = xy.slice(y, y+1).map(a => a.level)-1;
				//		 if(level = "-1") level = "0"
             let id = xy.slice(y, y+1).map(a => a.id);
 
 let nussa = "[Level: `"+level.toLocaleString()+"`/XP: `"+xp.toLocaleString()+"`]"
 let ab = "**#`"+(y+1)+"`. <@"+String(id)+"> - "+nussa+".**\n"
 if(ab === "**#`"+(y+1)+"`. <@undefined> - "+nussa+".**\n") ab = ""
             x += ab
						         }
     }
 let  ab3 = "**Paginas `"+(args[1] ? args[1] : "1")+"`/`10`.**"
 let x1 = ab3
     const embed = new Discord.MessageEmbed()
		 .setTitle("Rank Global:")
     .setDescription(`${x1}\n${x}\n${suaPosicao}`)
     .setColor("BLUE");
     globnoss.edit("<@"+message.author.id+">", embed)
     meuSet4.clear()
		 setTimeout(() => {message.channel.stopTyping()}, 1000)
		}
			 message.channel.stopTyping()
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
	name: "ranks",
	aliases: ["leaderboard", "lb", "lb-ranks", "lb-rank", "top"]
}