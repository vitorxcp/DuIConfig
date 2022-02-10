
const Canvas = require('canvas');
const Discord = require('discord.js')
const canvas = Canvas.createCanvas(384, 128);
const { registerFont } = require('canvas')
//registerFont({ family:"Arial" })
const ctx = canvas.getContext('2d');
const { createCanvas, loadImage } = require('canvas')

const db = require("quick.db")
module.exports.run = async (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
	try{
	message.channel.startTyping();
	try{
 let membro1 =  bot.users.cache.get(args[0]) || message.mentions.users.first()[0] || message.mentions.users.first() || args.slice(0).join(" ")
 }catch(err){
	 message.channel.stopTyping();
	 return message.channel.send('Lembre-se de mencionar dois usuários para shippar')
	 }
 try{
let membro2 =  bot.users.cache.get(args[1]) || message.mentions.users.array()[1] || message.mentions.users.last() || args.slice(1).join(" ")
}catch(err){
	 message.channel.stopTyping();
	 return message.channel.send('Lembre-se de mencionar dois usuários para shippar')
	 }
 let membro1 =  bot.users.cache.get(args[0]) || message.mentions.users.first()[0] || message.mentions.users.first() || args[0]
 let membro2 =  bot.users.cache.get(args[1]) || message.mentions.users.array()[1] || message.mentions.users.last() || args[1]
    if(membro1 === membro2) return message.channel.send('Mencione duas pessoas diferentes')
		
		if(!db.fetch("shipValor.userid.2."+membro1.id+"_"+membro2.id)){
			 valor2 = Math.floor(Math.random() * 100);	
	await db.add("shipValor.userid.2."+membro1.id+"_"+membro2.id, valor2)
	await db.add("shipValor.userid.2."+membro2.id+"_"+membro1.id, valor2)
		}
  //const amor = Math.floor(Math.random() * 100);

		 amor = "10"
if(amor === "10") amor = db.fetch("shipValor.userid.2."+membro1.id+"_"+membro2.id)
		  const loveIndex = Math.floor(amor / 10);
  const loveLevel = "█".repeat(loveIndex) + ".".repeat(10 - loveIndex);

    let nomeFim1 = membro1.username.length;
      let nomeFim2 = membro2.username.length;

      let calc1 = nomeFim1 - 3
    let calc2 = nomeFim2 - 3
  
  let nomeship;
    if(amor > 60) {
      nomeship = (membro1.username || args[0]).slice(0, 3) + (membro2.username || args[1]).slice(0, 3);
    } else if(amor >= 40) {
      nomeship = (membro1.username || args[0]).slice(0, calc1) + (membro2.username || args[1]).slice(0, calc2)
    } else {
      nomeship = (membro1.username || args[0]).slice(calc1, nomeFim1) + (membro2.username || args[1]).slice(calc2, nomeFim2)
    } 
  
  let emoticon;
    if(amor > 60) {
      emoticon = ("https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_2.png?v=1593651528429"); //imagem de coração
    } else if(amor >= 40) {
      emoticon = ("https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_3-1.png?v=1593652255529"); //imagem de sei lá
    } else {
      emoticon = ("https://cdn.glitch.com/00963c7e-8e86-4a55-8d85-36add9e330d7%2Femoji_1.png?v=1593651511900"); //imagem chorando
    }

  let desc;
    if(amor > 90) {
      desc = (":sparkling_heart: | HMMM, será que temos um novo casal por aqui?\n[`"+(membro1.username || args[0])+"` + `"+(membro2.username || args[1])+"` = `"+nomeship+"`] \n :heart: Esse é o casal perfeito, ninguem os separa! :heart:");
    } else if(amor >= 70) {
      desc = (":sparkling_heart: | HMMM, será que temos um novo casal por aqui?\n[`"+(membro1.username || args[0])+"` + `"+(membro2.username || args[1])+"` = `"+nomeship+"`] \n Esses aqui já tão se pegando e n contaram pra ngm! :neutral_face:");
    } else if(amor >= 45) {
      desc = (":sparkling_heart: | HMMM, será que temos um novo casal por aqui?\n[`"+(membro1.username || args[0])+"` + `"+(membro2.username || args[1])+"` = `"+nomeship+"`] \n Talvez só precisa o "+membro2.username+" querer... :no_mouth:");
    } else {
      desc = (":sparkling_heart: | HMMM, será que temos um novo casal por aqui?\n[`"+(membro1.username || args[0])+"` + `"+(membro2.username || args[1])+"` = `"+nomeship+"`] \n queria muito dizer que é possivel mas... :cry: ");
    }
  const canvas = Canvas.createCanvas(384, 128);
  const ctx = canvas.getContext('2d');
  const emote = await Canvas.loadImage(emoticon);
    const foto1 = await Canvas.loadImage(membro1.displayAvatarURL({format: "png"}) || "https://cdn.discordapp.com/embed/avatars/1.png")
  const foto2 = await  Canvas.loadImage(membro2.displayAvatarURL({format: "png"}) || "https://cdn.discordapp.com/embed/avatars/4.png")
    ctx.drawImage(emote, 125, 0, 128, 128)
      ctx.drawImage(foto1, -10, 0, 128, 128)
    ctx.drawImage(foto2, 260, 0, 128, 128)
 const amorat = new Discord.MessageAttachment(canvas.toBuffer(), 'DuiConfig_Ship.png')
let amorEmbed = new Discord.MessageEmbed()
  .setColor('#ff3399')
    .setDescription("**"+amor+"%** [`"+loveLevel+"`]")
  .attachFiles([amorat]).setImage('attachment://DuiConfig_Ship.png')
  message.quote('<@'+message.author.id+'> \n'+desc, amorEmbed)
message.channel.stopTyping();
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
  name: 'ship',
  aliases: ['shipar']
}