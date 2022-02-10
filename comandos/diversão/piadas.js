const superagent = require('superagent');
const translate = require('@vitalets/google-translate-api');
exports.run = async(client,message,args, prefix2) => {
			let messageArray = message.content.split(" ");
    let command = messageArray[0];
	try{
	let msg = await message.channel.send("<@"+message.author+">, estou criando uma piada, aguarde**!**")
	msg.edit("<@"+message.author+">, estou criando uma piada, aguarde**.**")
	msg.edit("<@"+message.author+">, estou criando uma piada, aguarde**..**")
    let {body} = await(superagent.get("https://official-joke-api.appspot.com/jokes/random"));
    translate(body.setup +"\n\n"+body.punchline, {to: 'pt'}).then(res => {
msg.edit(message.author+", estou criando uma piada, aguarde**...**")   
    msg.edit("<@"+message.author+">, "+res.text);
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
exports.help ={
	name: "piada",
	aliases: ["piadas", "joke"]
}