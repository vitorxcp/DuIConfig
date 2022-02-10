exports.run = async (bot, message, args, prefix2) => {
		try{
      const disbut = require("discord.js-buttons");
	const Discord = require("discord.js")
	async function getUserBannerUrl(userId) {
    const user = await bot.api.users(userId).get();
		if(!user.banner) return;
    // const extension = banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
    console.log(user)
    const extension = user.banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
    return user.banner ? `https://cdn.discordapp.com/banners/${userId}/${user.banner}${extension}` : null;
}
let usergetuser = bot.users.cache.get(args[0]) || message.mentions.users.first() || message.author
if(!usergetuser) return message.reply("Usuario Inexistente...")
  let bannerUrl = await getUserBannerUrl(usergetuser.id);
        if (bannerUrl) {
					console.log(bannerUrl)
            const embed = new Discord.MessageEmbed()
.setColor("BLUE")
                .setImage(bannerUrl)
								.setTimestamp()
         let botton = new disbut.MessageButton()
  .setStyle('url')
  .setURL(bannerUrl)   
  .setLabel('Link');
message.channel.send("<@"+message.author+">", {
   buttons: [botton], embed: embed
})
        } else {
					 const user = await bot.api.users(usergetuser.id).get();
					 let userbanner = user.banner_color
					 if(!userbanner) return message.reply("Ops, este usuario não tem uma cor ou um banner definido!")
					  bannercolor = `https://dummyimage.com/300x100/${userbanner.split('#').slice(1).join()}/&text=%20`;
                const embed = new Discord.MessageEmbed()
								.setColor(user.banner_color)
                .setTimestamp()
                .setImage(bannercolor);
              let botton = new disbut.MessageButton()
  .setStyle('url')
  .setURL(bannercolor)   
  .setLabel('Link');
message.channel.send("<@"+message.author+">", {
   buttons: [botton], embed: embed
})
        }
					} catch (err) {
								let messageArray = message.content.split(" ");
    let command = messageArray[0];
	error = new Discord.MessageEmbed()
.setColor("RED")
.setTimestamp()
.setTitle("**Falha ao Executar o Comando.**")
.setDescription("> **O comando `"+(prefix2+command.slice(prefix2.length))+"` deu erro interno!** \n \n **Querendo denunciar o erro? Entre no meu [Servidor de Suporte](https://discord.gg/w6uZyBu) e denuncie no chat `#bugs`, se possível com prints!** \n\n```js\n"+err+"\n```")
message.quote("<@"+message.author+">", error)
}
    }
exports.help = {
name: "banner",
aliases: ["bandeira"]
}
/*
const Discord = require('discord.js');
const axios = require('axios');
exports.help = {
  name:"banner",
  aliases: []
  }
 exports.run = async (client, message, args) => {

const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
axios.get(`https://discord.com/api/users/${user.id}`, {
    headers: {
        Authorization: `Bot`+ process.env.tokenbot,
    },
})
.then((res) => {
    const { banner } = res.data;
    if(banner) {
        const extension = banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
        const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}`;

        const bannerimg = new MessageEmbed()
        .setDescription(`**[Baixe Aqui](${url})**`)
        .setImage(url)
        .setColor('BLUE')
        message.channel.send(bannerimg)
      }
        if(!banner) {

const extension = banner.startsWith("a_") ? '.gif?size=1024' : '.png?size=1024';
        const url = `https://cdn.discordapp.com/banners/${user.id}/${accent_color}${extension}`;
console.log(url)
        const bannerimg = new MessageEmbed()

        .setDescription(`user n tem banner, kskss, mais tem color, legal...`)
        .setColor('BLUE')

        message.channel.send(bannerimg)
        }
})} 

 */