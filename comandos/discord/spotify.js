const disbut = require("discord.js-buttons");
const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-BR');
exports.run = async (bot,message,args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
  	try{
    let user = message.mentions.users.first() || bot.users.cache.get(args[0])
if(!args[0]) {
	try{
	    if (message.author.presence.activities[0].name === 'Spotify' && message.author.presence.activities[0].type === "LISTENING") {
      
    let trackIMG = message.author.presence.activities[0].assets.largeImageURL();
    let trackURL = `https://open.spotify.com/track/${message.author.presence.activities[0].syncID}`;
    let trackName = message.author.presence.activities[0].details;
    let trackAuthor = message.author.presence.activities[0].state;
    let trackAlbum = message.author.presence.activities[0].assets.largeText;
     let timeSong = "<t:"+moment(message.author.presence.activities[0].createdTimestamp).format('X')+":R>"
const embed = new Discord.MessageEmbed()
  .setTitle("**Informação da Musica `"+trackName+"`!**")
  .setColor("GREEN")
  .setThumbnail(trackIMG)
  .addField('** 📄 Autores/Cantores:** ', "**-> `"+trackAuthor+"`.**", true)
  .addField('**📚 Album:** ', "**-> `"+trackAlbum+"`.**", true)
//cmd spt update 1.3:
.addField("**⌚ Musica iniciada:**", "**"+timeSong+".**")
  .addField('**<:Spotify:564498840175116288> - Link! **', `**[${trackName}](${trackURL})**`, false)
.setTimestamp()
  let spt = new disbut.MessageButton()
  .setStyle('url')
  .setURL(trackURL)   
  .setLabel('Spotify Link');
message.channel.send("<@"+message.author+">", {
   buttons: [spt], embed: embed
})

    } else {
			try{
	    if (message.author.presence.activities[1].name === 'Spotify' && message.author.presence.activities[1].type === "LISTENING") {
      
    let trackIMG = message.author.presence.activities[1].assets.largeImageURL();
    let trackURL = `https://open.spotify.com/track/${message.author.presence.activities[1].syncID}`;
    let trackName = message.author.presence.activities[1].details;
    let trackAuthor = message.author.presence.activities[1].state;
    let trackAlbum = message.author.presence.activities[1].assets.largeText;
    let timeSong = "<t:"+moment(message.author.presence.activities[1].createdTimestamp).format('X')+":R>"
const embed = new Discord.MessageEmbed()
  .setTitle("**Informação da Musica `"+trackName+"`!**")
  .setColor("GREEN")
  .setThumbnail(trackIMG)
  .addField('** 📄 Autores/Cantores:** ', "**-> `"+trackAuthor+"`.**", true)
  .addField('**📚 Album:** ', "**-> `"+trackAlbum+"`.**", true)
.addField("**⌚ Musica iniciada:**", "**"+timeSong+".**")
  .addField('**<:Spotify:564498840175116288> - Link! **', `**[${trackName}](${trackURL})**`, false)
.setTimestamp()
  let spt = new disbut.MessageButton()
  .setStyle('url')
  .setURL(trackURL)   
  .setLabel('Spotify Link');
message.channel.send("<@"+message.author+">", {
   buttons: [spt], embed: embed
})
    }else{
				 message.channel.send('> <@'+message.author+'>, **a Pelo Que Percebi Você Não Esta Ouvindo Musica No Spotify!**')
			}
		}catch(err){
		//	console.error(err)
				 message.channel.send('> <@'+message.author+'>, **a 3 Pelo Que Percebi Você Não Esta Ouvindo Musica No Spotify!**')
			}
		}
	}catch(err){
		//console.log(err)
			try{
	    if (message.author.presence.activities[1].name === 'Spotify' && message.author.presence.activities[1].type === "LISTENING") {
      
    let trackIMG = message.author.presence.activities[1].assets.largeImageURL();
    let trackURL = `https://open.spotify.com/track/${message.author.presence.activities[1].syncID}`;
    let trackName = message.author.presence.activities[1].details;
    let trackAuthor = message.author.presence.activities[1].state;
    let trackAlbum = message.author.presence.activities[1].assets.largeText;
let timeSong = "<t:"+moment(message.author.presence.activities[1].createdTimestamp).format('X')+":R>"
const embed = new Discord.MessageEmbed()
  .setTitle("**Informação da Musica `"+trackName+"`!**")
  .setColor("GREEN")
  .setThumbnail(trackIMG)
  .addField('** 📄 Autores/Cantores:** ', "**-> `"+trackAuthor+"`.**", true)
  .addField('**📚 Album:** ', "**-> `"+trackAlbum+"`.**", true)
.addField("**⌚ Musica iniciada:**", "**"+timeSong+".**")
  .addField('**<:Spotify:564498840175116288> - Link! **', `**[${trackName}](${trackURL})**`, false)
.setTimestamp()
  let spt = new disbut.MessageButton()
  .setStyle('url')
  .setURL(trackURL)   
  .setLabel('Spotify Link');
message.channel.send("<@"+message.author+">", {
   buttons: [spt], embed: embed
})
    }else{
				 message.channel.send('> <@'+message.author+'>, **Pelo Que Percebi Você Não Esta Ouvindo Musica No Spotify!**')
			}
		}catch(err){
	//			console.error(err)
				 message.channel.send('> <@'+message.author+'>, **Pelo Que Percebi Você Não Esta Ouvindo Musica No Spotify!**')
			}
  }

}
if(user){
	try{
	    if (user.presence.activities[0].name === 'Spotify' && user.presence.activities[0].type === "LISTENING") {
      
    let trackIMG = user.presence.activities[0].assets.largeImageURL();
    let trackURL = `https://open.spotify.com/track/${user.presence.activities[0].syncID}`;
    let trackName = user.presence.activities[0].details;
    let trackAuthor = user.presence.activities[0].state;
    let trackAlbum = user.presence.activities[0].assets.largeText;
let timeSong = "<t:"+moment(user.presence.activities[0].createdTimestamp).format('X')+":R>"
const embed = new Discord.MessageEmbed()
   .setTitle("**O `"+user.username+"` Esta Ouvindo `"+trackName+"`!**")
  .setColor("GREEN")
  .setThumbnail(trackIMG)
  .addField('** 📄 Autores/Cantores:** ', "**-> `"+trackAuthor+"`.**", true)
  .addField('**📚 Album:** ', "**-> `"+trackAlbum+"`.**", true)
.addField("**⌚ Musica iniciada:**", "**"+timeSong+".**")
  .addField('**<:Spotify:564498840175116288> - Escute No Spotify! **', `**[${trackName}](${trackURL})**`, false)
.setTimestamp()
  let spt = new disbut.MessageButton()
  .setStyle('url')
  .setURL(trackURL)   
  .setLabel('Spotify Link');
message.channel.send("<@"+message.author+">", {
   buttons: [spt], embed: embed
})

    } else {
   	try{
	    if (user.presence.activities[1].name === 'Spotify' && user.presence.activities[1].type === "LISTENING") {
      
    let trackIMG = user.presence.activities[1].assets.largeImageURL();
    let trackURL = `https://open.spotify.com/track/${user.presence.activities[1].syncID}`;
    let trackName = user.presence.activities[1].details;
    let trackAuthor = user.presence.activities[1].state;
    let trackAlbum = user.presence.activities[1].assets.largeText;
let timeSong = "<t:"+moment(user.presence.activities[1].createdTimestamp).format('X')+":R>"
const embed = new Discord.MessageEmbed()
   .setTitle("**O `"+user.username+"` Esta Ouvindo `"+trackName+"`!**")
  .setColor("GREEN")
  .setThumbnail(trackIMG)
  .addField('** 📄 Autores/Cantores:** ', "**-> `"+trackAuthor+"`.**", true)
  .addField('**📚 Album:** ', "**-> `"+trackAlbum+"`.**", true)
 .addField("**⌚ Musica iniciada:**", "**"+timeSong+".**")
  .addField('**<:Spotify:564498840175116288> - Escute No Spotify! **', `**[${trackName}](${trackURL})**`, false)
.setTimestamp()
  let spt = new disbut.MessageButton()
  .setStyle('url')
  .setURL(trackURL)   
  .setLabel('Spotify Link');
message.channel.send({
   buttons: [spt], embed: embed
})

    } else {
    message.channel.send('> **O `'+user.username+'` Não Esta Ouvindo Spotify!**')
    }
	}catch(err){
 message.channel.send('> **O `'+user.username+'` Não Esta Ouvindo Spotify!**')   
  }
    }
	}catch(err){
    	try{
	    if (user.presence.activities[1].name === 'Spotify' && user.presence.activities[1].type === "LISTENING") {
      
    let trackIMG = user.presence.activities[1].assets.largeImageURL();
    let trackURL = `https://open.spotify.com/track/${user.presence.activities[1].syncID}`;
    let trackName = user.presence.activities[1].details;
    let trackAuthor = user.presence.activities[1].state;
    let trackAlbum = user.presence.activities[1].assets.largeText;
let timeSong = "<t:"+moment(user.presence.activities[1].createdTimestamp).format('X')+":R>"
const embed = new Discord.MessageEmbed()
   .setTitle("**O `"+user.username+"` Esta Ouvindo `"+trackName+"`!**")
  .setColor("GREEN")
  .setThumbnail(trackIMG)
  .addField('** 📄 Autores/Cantores:** ', "**-> `"+trackAuthor+"`.**", true)
  .addField('**📚 Album:** ', "**-> `"+trackAlbum+"`.**", true)
 .addField("**⌚ Musica iniciada:**", "**"+timeSong+".**")
  .addField('**<:Spotify:564498840175116288> - Escute No Spotify! **', `**[${trackName}](${trackURL})**`, false)
.setTimestamp()
  let spt = new disbut.MessageButton()
  .setStyle('url')
  .setURL(trackURL)   
  .setLabel('Spotify Link');
message.channel.send({
   buttons: [spt], embed: embed
})

    } else {
    message.channel.send('> **O `'+user.username+'` Não Esta Ouvindo Spotify!**')
    }
	}catch(err){
 message.channel.send('> **O `'+user.username+'` Não Esta Ouvindo Spotify!**')   
  }   
  }

}
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
    name: "spotify",
		aliases: ["SPOTIFY", "spt", "SPT"]
}