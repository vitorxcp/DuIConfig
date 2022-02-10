const Discord = require("discord.js");
const fs = require("fs")
module.exports.run = async (bot, message, args, prefix2) => {
 // if(!message.author.id === "518862457876250625") return message.reply("Comando em Atualizações!")
	try{
 role_color = "BLUE"
    var embed1 = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle(">   **Lista de Comando:.**")
.setDescription("Logo a baixo estará a minha lista de reações para verem meus comandos, mais antes disso que tal me ajudar? Você pode me ajudar votando em mim no [Top.gg](https://top.gg/bot/"+bot.user.id+"/), assim me ajudando a ser divulgado e fazendo eu creçer cada vez mais.\n\n**   ↩ • `Voltar`.** \n**   <a:mega_fone:566446381112360980> • `Informações`.** \n**   <:policia:594366660345987073> • `Moderação`.** \n**   <:discord:777943097215680562> • `Discord`.** \n**   🎉 • `Diversão`.**")
.setFooter("Meu Prefix No Servidor: "+prefix2+"")
    message.channel.send("<@"+message.author.id+">", embed1).then(async msg => {
        await msg.react('↩')
        await msg.react('566446381112360980')
       await msg.react('594366660345987073')
			await msg.react("777943097215680562")
			await msg.react("🎉")
				 const admfilterOPA9 = (reaction, user) => reaction.emoji.name === '🎉' && user.id === message.author.id;
        const admOPA9 = msg.createReactionCollector(admfilterOPA9, { time: 240000 })
        admOPA9.on('collect', async bot => {
           carregando = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos De Diversão (`...`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"matar` • Cansado da quela pessoa chata?Mate-o!**\n<a:typingstatus:603634048396689418>")
 msg.edit(carregando)
          setTimeout(() => {
              var emoji16 = new Discord.MessageEmbed()           
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos De Diversão (`3`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"matar` •Cansado da quela pessoa chata?Mate-o!.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"ship` • Querendo formar um casal ou shipar? Tente ver se irá dar certo.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"abraçar` • Vendo aquela pessoa desanimada? Abrace-o e faça o(a) feliz ;3.**")
.setFooter("Meu Prefix No Servidor: "+prefix2+"")

             msg.edit(emoji16)
          }, 2500)
        });
        const admfilterOPA = (reaction, user) => reaction.emoji.name === 'mega_fone' && user.id === message.author.id;
        const admOPA = msg.createReactionCollector(admfilterOPA, { time: 240000 })
        admOPA.on('collect', async bot => {
                     carregando = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos De Informações (`...`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"banner` • Veja seu banner do Discord.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"servidores` • Veja os servidores que o DuiConfig atende.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"ranks` • Veja o Top 1 no rank.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"taginfo` • Este comando ira informar as infos do cargo.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"perfil` • Edite seu perfil ou apenas mostre para outras pessoas!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"level` • Observe os seus niveis de experiencias.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"botinfo` • Veja algumas informações do bot.**\n<a:typingstatus:603634048396689418>")
 msg.edit(carregando)
          setTimeout(() => {
            var emoji1 = new Discord.MessageEmbed()           
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos De Informações (`15`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"banner` • Veja seu banner do Discord.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"servidores` • Veja os servidores que o DuiConfig atende.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"ranks` • Veja o Top 1 no rank.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"taginfo` • Este comando ira informar as infos do cargo.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"perfil` • Edite seu perfil ou apenas mostre para outras pessoas!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"level` • Observe os seus niveis de experiencias.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"botinfo` • Veja algumas informações do bot.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"userinfo` • Motre as suas informações ou apenas veja elas.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"serverinfo` • Querendo saber algo do seu servidor, veja as informações do servidor.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"spotify` • Veja a musica que esta tocando no Spotify (_isto ultiliza o seu status do Discord_).** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"avatar` • Baixe o avatar para ter um backup.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"servericon` • Apenas veja a imagem do servidor em grande escala.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"chatinfo` • Informe as informações dos Chats, ou apenas verifique algo.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"cor` • Verifique alguma cor em HEX.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"status` • Veja a presença de atividades dentro do Discord!**")
.setFooter("Meu Prefix No Servidor: "+prefix2+"")

             msg.edit(emoji1)
                      }, 2500)
        });
				 const admfilterOPA8 = (reaction, user) => reaction.emoji.name === 'discord' && user.id === message.author.id;
        const admOPA8 = msg.createReactionCollector(admfilterOPA8, { time: 240000 })
        admOPA8.on('collect', async bot => {
                               carregando = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos Do Discord (`...`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"meta` • Tente bater essas metas ai rapaz, quero ver se você e brabo mesmo.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"embedjs` • Deixe seu script bonito (_recomendado para celulares_).** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"sobremim` • Seja mais formal ou apenas escreva algo aleatorio.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"casar` • Você ama alguem? então case com ela e sejam felizes para sempre.**\n<a:typingstatus:603634048396689418>")
 msg.edit(carregando)
          setTimeout(() => {
            var emoji16 = new Discord.MessageEmbed()           
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos Do Discord (`8`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"meta` • Tente bater essas metas ai rapaz, quero ver se você e brabo mesmo.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"embedjs` • Deixe seu script bonito (recomendado para celulares).** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"sobremim` • Seja mais formal ou apenas escreva algo aleatorio.** \n **<:Setadireita1:767234360780390421> `"+prefix2+"casar` • Você ama alguem? então case com ela e sejam felizes para sempre.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"say` • Faça eu falar algo legal ai.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"afk` • Ultilize isto para as pessoas saberem que você esta Ausente do Discord.**\n **<a:Setadireita1:767234360780390421> `"+prefix2+"afk spotify` • Ausente do Discord mais online do Spotify? Ultilize isto para avisar que voê esta Ausente do Discord.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"suporte` • Veja minhas plataformas de suporte.**")
.setFooter("Meu Prefix No Servidor: "+prefix2+"")

             msg.edit(emoji16)
          },2500)
        });
        const admfilterDOWN = (reaction, user) => reaction.emoji.name === 'policia' && user.id === message.author.id;
        const admDOWN = msg.createReactionCollector(admfilterDOWN, { time: 240000 })
        admDOWN.on('collect', async bot => {
                          carregando = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos De Moderação (`...`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"painel` • Configure algo do seu servidor no DuiConfig para deixar mais bunitin.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"config welcome` • Sete um canal de entradas/saidas para o bot anunciar.** \n  **<a:Setadireita1:767234360780390421> `"+prefix2+"config prefix` • O Prefix do DuiCofig esta dando conflito com outro bot? Mude-o para no futuro não dar erros.**\n **<a:Setadireita1:767234360780390421> `"+prefix2+"setchat` • Querendo deixar os chats mais organizados? Sete canais para eu não enviar comandos.**\n<a:typingstatus:603634048396689418>")
 msg.edit(carregando)
          setTimeout(() => {
            var emoji1 = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle("> **Comandos De Moderação (`11`).**")
.setDescription("**<a:Setadireita1:767234360780390421> `"+prefix2+"painel` • Configure algo do seu servidor no DuiConfig para deixar mais bunitin.** \n**<a:Setadireita1:767234360780390421> `"+prefix2+"config welcome` • Sete um canal de entradas/saidas para o bot anunciar.** \n  **<a:Setadireita1:767234360780390421> `"+prefix2+"config prefix` •O Prefix do DuiCofig esta dando conflito com outro bot? Mude-o para no futuro não dar erros.**\n **<a:Setadireita1:767234360780390421> `"+prefix2+"setchat` • Querendo deixar os chats mais organizados? Sete canais para eu não enviar comandos.**\n **<a:Setadireita1:767234360780390421> `"+prefix2+"enquete` • Querendo fazer enquetes ou votações? Ultilize o DuiConfig.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"settopico` • Sem topicos ou ate desorganizados? Mude-os ou configure do seu geitin!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"warn` • Usuario falando algo toxico ou outra coisa? Avise-o para não repitir mais** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"warns` • Veja a lista de avisos do servidor.** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"nick` • Mude o nickname de alguem, assim evitando tais nicks impróprios!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"ban` • Bane um usuário do servidor, se ele estiver fazendo algo que e contra as regras do servidor ou do Discord!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"kick` • Vendo algo errado? Retire o usuario do servidor para ele saber que esta fazendo algo de errado!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"mute` • 	O Usuário está falando algo que não deve ou esta sendo toxico? Mute-o, assim ele ira se acalmar!** \n **<a:Setadireita1:767234360780390421> `"+prefix2+"unmute` • O Usuário aprendeu a falar novamente ou apenas querendo fazer ele falar novamente? Apenas use este comando!**")
.setFooter("Meu Prefix No Servidor: "+prefix2+"")
             msg.edit(emoji1)
          },2500)
        });
        const admfilterUM = (reaction, user) => reaction.emoji.name === '↩' && user.id === message.author.id;
        const admUM = msg.createReactionCollector(admfilterUM, { time: 240000 });
        admUM.on('collect', async bot => {
            var emoji2 = new Discord.MessageEmbed()
.setColor(role_color)
.setTimestamp()
.setTitle(">   **Lista de Comando:.**")
.setDescription("Logo a baixo estará a minha lista de reações para verem meus comandos, mais antes disso que tal me ajudar? Você pode me ajudar votando em mim no [Top.gg](https://top.gg/bot/777936158638342175/), assim me ajudando a ser divulgado e fazendo eu creçer cada vez mais.\n\n**   ↩ • `Voltar`.** \n**   <a:mega_fone:566446381112360980> • `Informações`.** \n**   <:policia:594366660345987073> • `Moderação`.** \n**   <:discord:777943097215680562> • `Discord`.** \n**   🎉 • `Diversão`.**")
.setFooter("Meu Prefix No Servidor: "+prefix2+"")
            await msg.edit(emoji2)
        })
    })
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
    name: "ajuda",
		aliases: ["help", "AJUDA", "HELP"]
}