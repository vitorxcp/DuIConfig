const Discord = require("discord.js");

exports.run = async (bot, message, args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
	try{
      let i0 = 0;
      let i1 = 5;
      let page = 1;
//servidor.members.cache.filter(member => member.user.presence.status === "idle").size
      let description =
        bot.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => "**"+(i + 1)+" - `"+r.name+"` (`"+r.id+"`) [`"+(r.memberCount - r.members.cache.filter(m => m.user.bot).size).toLocaleString()+"` Membros/`"+(r.members.cache.filter(s => s.user.bot).size).toLocaleString()+"` Bots].**")
          .slice(0, 5)
          .join("\n");

      let embed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("GREEN")
        .setFooter("Total de Servidores: "+bot.guilds.cache.size.toLocaleString()+".")
        .setTitle("Páginas - `"+page+"`/`"+Math.ceil(bot.guilds.cache.size / 5)+"`.")
        .setDescription(description);

      let msg = await message.channel.send(embed);

      await msg.react("⬅");
      await msg.react("➡");
      await msg.react("❌");

      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );

      collector.on("collect", async (reaction, user) => {
        if (reaction._emoji.name === "⬅") {
					reaction.users.remove(message.author.id);
          // Updates variables
          i0 = i0 - 5;
          i1 = i1 - 5;
          page = page - 1;

          // if there is no guild to display, delete the message
          if (i0 + 1 < 0) {
            console.log(i0)
						embed = new Discord.MessageEmbed()
						.setColor("RED")
						.setTitle("Ops, tente ir para frente!")
						.setTimestamp()
            return msg.edit(embed);
          }
          if (!i0 || !i1) {
          //  return msg.delete();
          }

          description =
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map((r, i) => "**"+(i + 1)+" - `"+r.name+"` (`"+r.id+"`) [`"+(r.memberCount - r.members.cache.filter(m => m.user.bot).size).toLocaleString()+"` Membros/`"+(r.members.cache.filter(s => s.user.bot).size).toLocaleString()+"` Bots].**")
              .slice(i0, i1)
              .join("\n");

          // Update the embed with new informations
          embed
                   .setTitle("Páginas - `"+page+"`/`"+Math.ceil(bot.guilds.cache.size / 5)+"`.")
            .setDescription(description);

          // Edit the message
          msg.edit(embed);
        }

        if (reaction._emoji.name === "➡") {
					reaction.users.remove(message.author.id);
          // Updates variables
          i0 = i0 + 5;
          i1 = i1 + 5;
          page = page + 1;

          // if there is no guild to display, delete the message
          if (i1 > bot.guilds.cache.size + 5) {
							embed = new Discord.MessageEmbed()
						.setColor("RED")
						.setTitle("Opa, Tente voltar para traz!")
						.setTimestamp()
            return msg.edit(embed);
          }
          if (!i0 || !i1) {
         //   return msg.delete();
          }

          description =
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
             .map((r, i) => "**"+(i + 1)+" - `"+r.name+"` (`"+r.id+"`) [`"+(r.memberCount - r.members.cache.filter(m => m.user.bot).size).toLocaleString()+"` Membros/`"+(r.members.cache.filter(s => s.user.bot).size).toLocaleString()+"` Bots].**")
              .slice(i0, i1)
              .join("\n");
          embed
                  .setTitle("Páginas - `"+page+"`/`"+Math.ceil(bot.guilds.cache.size / 5)+"`.")
            .setDescription(description)
          // Edit the message.
          msg.edit(embed);
        }

        if (reaction._emoji.name === "❌") {
          msg.delete();
					message.reply("Atualmente Estou Em `"+bot.guilds.cache.size.toLocaleString()+"` Servidores. (*embed deletado*)")
        }

        // Remove the reaction when the user react to the message
     //   await reaction.users.remove(message.author.id);
      });
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
	name: "servidores",
	aliases:["servers", "sv"]
}