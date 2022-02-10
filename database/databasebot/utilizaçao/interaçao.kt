pacote me.dinosparkour.commands

me import.dinosparkour.utils.ChatUtil
import net.dv8tion.jda.core.MessageBuilder
import net.dv8tion.jda.core.Permissão
import net.dv8tion.jda.core.entidades.Mensagem
import net.dv8tion.jda.core.entidades.MessageEmbed
import net.dv8tion.jda.core.events.message.MessageReceivedEvent
importação java.util.*
importar java.util.function.Consumidor

comando de classe abstrata (nome val: String,
                       descrição val: String,
                       val alias: Array<String> = arrayOf(nome),
                       val permitePrivate: Boolean = verdadeiro,
                       val autorExclusivo: Boolean = falso,
                       val requiredPermissões: Array<Permissão> = arrayOf(),
                       val userRequiresPermissões: Boolean = true,
                       val botRequiresPermissões: Boolean = true)
    : EventListener {

    init {
 registro()
    }

    execução de diversão abstrata (args: List<String>, e: MessageReceivedEvent)

    registro de diversão privada() = Registry.registerCommand(este)

    divertimento Corda. toMessage(): Mensagem = MessageBuilder().append(this).build()

    divertimento MensagensReceivedEvent. resposta(msg: Mensagem, sucesso: Consumidor<Message>? = nulo)
            = ChatUtil(este).responder(msg, sucesso)

    divertimento MensagensReceivedEvent. resposta(incorporar: MessageEmbed, sucesso: Consumer<Message>? = nulo)
            = ChatUtil(este).responder(incorporar, sucesso)

    divertimento MensagensReceivedEvent. resposta (texto: String, success: Consumer<Message>? = nulo)
            = ChatUtil(este).responder (texto, sucesso)
}