exports.run = async (bot,message,args) => {
  const Discord = require("discord.js")
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
		try{
         let user = message.mentions.users.first() || bot.users.cache.get(args[0])
         if(!user){
           embed = new Discord.MessageEmbed()
           .setColor("BLUE")
           .setTimestamp()
           .setTitle("**Atividades dentro do Discord!**")
           .setDescription("> As atividades são de acordo com o seu status de presenca no Discord, se você estiver jogando algo e aparecer no Discord, isto também faz aparecer aqui!")
           if(!message.author.presence.activities[0]){
             embed.setDescription("> As atividades são de acordo com o seu status de presenca no Discord, se você estiver jogando algo e aparecer no Discord, isto também faz aparecer aqui, e como no caso você não tem nenhum status de presença dentro do Discord, então não posso fazer nd rapaz!")
           }
            let ações = {
               PLAYING: "Jogando",
               STREAMING: "Transmitindo",
               LISTENING: "Ouvindo",
               WATCHING: "Assistindo",
               CUSTOM_STATUS: "Status Personalizado", 
               COMPETING: "Competindo"
             }
           if(message.author.presence.activities[0]){
             if(ações[message.author.presence.activities[0].type] === "Ouvindo") {
               if(message.author.presence.activities[0].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[message.author.presence.activities[0].type]+" Spotify **[`Publico`]**.", "> **Musica: `"+message.author.presence.activities[0].details+"` De: `"+message.author.presence.activities[0].state+"`.**")
               }else{
                  embed.addField(""+ações[message.author.presence.activities[0].type]+" **[`Publico`]**.", "> **`"+(message.author.presence.activities[0].state || message.author.presence.activities[0].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[message.author.presence.activities[0].type]+" **[`Publico`]**.", "> **`"+(message.author.presence.activities[0].state || message.author.presence.activities[0].name)+"`.**")
           }
           }
             if(message.author.presence.activities[1]){
             if(ações[message.author.presence.activities[1].type] === "Ouvindo") {
               if(message.author.presence.activities[1].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[message.author.presence.activities[1].type]+" Spotify [`Segundo Status`].", "> **Musica: `"+message.author.presence.activities[1].details+"` De: `"+message.author.presence.activities[1].state+"`.**")
               }else{
                  embed.addField(""+ações[message.author.presence.activities[1].type]+" [`Segundo Status`].", "> **`"+(message.author.presence.activities[1].state || message.author.presence.activities[1].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[message.author.presence.activities[1].type]+" [`Segundo Status`].", "> **`"+(message.author.presence.activities[1].state || message.author.presence.activities[1].name)+"`.**")
           }
           }
             if(message.author.presence.activities[2]){
             if(ações[message.author.presence.activities[2].type] === "Ouvindo") {
               if(message.author.presence.activities[2].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[message.author.presence.activities[2].type]+" Spotify [`Segundo Status`].", "> **Musica: `"+message.author.presence.activities[2].details+"` De: `"+message.author.presence.activities[2].state+"`.**")
               }else{
                  embed.addField(""+ações[message.author.presence.activities[2].type]+".", "> **`"+(message.author.presence.activities[2].state || message.author.presence.activities[2].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[message.author.presence.activities[2].type]+".", "> **`"+(message.author.presence.activities[2].state || message.author.presence.activities[2].name)+"`.**")
           }
           }
             if(message.author.presence.activities[3]){
             if(ações[message.author.presence.activities[3].type] === "Ouvindo") {
               if(message.author.presence.activities[3].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[message.author.presence.activities[3].type]+" Spotify.", "> **Musica: `"+message.author.presence.activities[3].details+"` De: `"+message.author.presence.activities[3].state+"`.**")
               }else{
                  embed.addField(""+ações[message.author.presence.activities[3].type]+".", "> **`"+(message.author.presence.activities[3].state || message.author.presence.activities[3].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[message.author.presence.activities[3].type]+".", "> **`"+(message.author.presence.activities[3].state || message.author.presence.activities[3].name)+"`.**")
           }
           }
             if(message.author.presence.activities[4]){
             if(ações[message.author.presence.activities[4].type] === "Ouvindo") {
               if(message.author.presence.activities[4].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[message.author.presence.activities[4].type]+" Spotify.", "> **Musica: `"+message.author.presence.activities[4].details+"` De: `"+message.author.presence.activities[4].state+"`.**")
               }else{
                  embed.addField(""+ações[message.author.presence.activities[4].type]+".", "> **`"+(message.author.presence.activities[4].state || message.author.presence.activities[4].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[message.author.presence.activities[4].type]+".", "> **`"+(message.author.presence.activities[4].state || message.author.presence.activities[4].name)+"`.**")
           }
           }
             if(message.author.presence.activities[5]){
             if(ações[message.author.presence.activities[5].type] === "Ouvindo") {
               if(message.author.presence.activities[5].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[message.author.presence.activities[5].type]+" Spotify.", "> **Musica: `"+message.author.presence.activities[5].details+"` De: `"+message.author.presence.activities[5].state+"`.**")
               }else{
                  embed.addField(""+ações[message.author.presence.activities[5].type]+".", "> **`"+(message.author.presence.activities[5].state || message.author.presence.activities[5].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[message.author.presence.activities[5].type]+".", "> **`"+(message.author.presence.activities[5].state || message.author.presence.activities[5].name)+"`.**")
           }
             }
           message.reply(embed)
         }else{
           embed = new Discord.MessageEmbed()
           .setColor("BLUE")
           .setTimestamp()
           .setTitle("**Atividades dentro do Discord de `"+user.username+"`!**")
           .setDescription("> As atividades são de acordo com o seu status de presenca no Discord, se a pessoa estiver jogando algo e aparecer no Discord, isto também faz aparecer aqui!")
           if(!user.presence.activities[0]){
             embed.setDescription("> As atividades são de acordo com o seu status de presenca no Discord, se a pessoa estiver jogando algo e aparecer no Discord, isto também faz aparecer aqui, e como no caso a pessoa não tem nenhum status de presença dentro do Discord, então não posso fazer nd rapaz!")
           }
            let ações = {
               PLAYING: "Jogando",
               STREAMING: "Tranmitindo",
               LISTENING: "Ouvindo",
               WATCHING: "Assistindo",
               CUSTOM_STATUS: "Status Personalizado", 
               COMPETING: "Competindo"
             }
           if(user.presence.activities[0]){
             if(ações[user.presence.activities[0].type] === "Ouvindo") {
               if(user.presence.activities[0].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[user.presence.activities[0].type]+" Spotify **[`Publico`]**.", "> **Musica: `"+user.presence.activities[0].details+"` De: `"+user.presence.activities[0].state+"`.**")
               }else{
                  embed.addField(""+ações[user.presence.activities[0].type]+" **[`Publico`]**.", "> **`"+(user.presence.activities[0].state || user.presence.activities[0].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[user.presence.activities[0].type]+" **[`Publico`]**.", "> **`"+(user.presence.activities[0].state || user.presence.activities[0].name)+"`.**")
           }
           }
           if(user.presence.activities[1]){
             if(ações[user.presence.activities[1].type] === "Ouvindo") {
               if(user.presence.activities[1].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[user.presence.activities[1].type]+" Spotify [`Segundo Status`].", "> **Musica: `"+user.presence.activities[1].details+"` De: `"+user.presence.activities[1].state+"`.**")
               }else{
                  embed.addField(""+ações[user.presence.activities[1].type]+" [`Segundo Status`].", "> **`"+(user.presence.activities[1].state || user.presence.activities[1].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[user.presence.activities[1].type]+" [`Segundo Status`].", "> **`"+(user.presence.activities[1].state || user.presence.activities[1].name)+"`.**")
           }
           }
           if(user.presence.activities[2]){
             if(ações[user.presence.activities[2].type] === "Ouvindo") {
               if(user.presence.activities[2].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[user.presence.activities[2].type]+" Spotify.", "> **Musica: `"+user.presence.activities[2].details+"` De: `"+user.presence.activities[2].state+"`.**")
               }else{
                  embed.addField(""+ações[user.presence.activities[2].type]+".", "> **`"+(user.presence.activities[0].state || user.presence.activities[2].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[user.presence.activities[2].type]+".", "> **`"+(user.presence.activities[2].state || user.presence.activities[2].name)+"`.**")
           }
           }
           if(user.presence.activities[3]){
             if(ações[user.presence.activities[3].type] === "Ouvindo") {
               if(user.presence.activities[3].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[user.presence.activities[3].type]+" Spotify.", "> **Musica: `"+user.presence.activities[3].details+"` De: `"+user.presence.activities[3].state+"`.**")
               }else{
                  embed.addField(""+ações[user.presence.activities[3].type]+".", "> **`"+(user.presence.activities[3].state || user.presence.activities[3].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[user.presence.activities[3].type]+".", "> **`"+(user.presence.activities[3].state || user.presence.activities[3].name)+"`.**")
           }
           }
           if(user.presence.activities[4]){
             if(ações[user.presence.activities[4].type] === "Ouvindo") {
               if(user.presence.activities[4].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[user.presence.activities[4].type]+" Spotify.", "> **Musica: `"+user.presence.activities[4].details+"` De: `"+user.presence.activities[4].state+"`.**")
               }else{
                  embed.addField(""+ações[user.presence.activities[4].type]+".", "> **`"+(user.presence.activities[4].state || user.presence.activities[4].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[user.presence.activities[4].type]+".", "> **`"+(user.presence.activities[4].state || user.presence.activities[4].name)+"`.**")
           }
           }
           if(user.presence.activities[5]){
             if(ações[user.presence.activities[5].type] === "Ouvindo") {
               if(user.presence.activities[5].name === "Spotify") {
                  embed.addField("<:Spotify:564498840175116288> "+ações[user.presence.activities[5].type]+" Spotify.", "> **Musica: `"+user.presence.activities[5].details+"` De: `"+user.presence.activities[5].state+"`.**")
               }else{
                  embed.addField(""+ações[user.presence.activities[5].type]+".", "> **`"+(user.presence.activities[5].state || user.presence.activities[5].name)+"`.**")
               }
             } else{
             embed.addField(""+ações[user.presence.activities[5].type]+".", "> **`"+(user.presence.activities[5].state || user.presence.activities[5].name)+"`.**")
           }
           }
           message.reply(embed)
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
  name: "status",
  aliases: ["atividades"]
}