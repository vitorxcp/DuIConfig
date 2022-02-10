@bot.message_handler(commands=['start'])
def start(message):
    markup = types.ReplyKeyboardMarkup()
    item = types.KeyboardButton('bum')
    markup.add(item)
    bot.send_message(message.chat.id, '', reply_markup=markup)


@bot.message_handler(content_types=['text'])
def handle_text(message):
    if message.text.strip() == 'db':
        answer = '' + random.choice(Places)
        bot.send_message(message.chat.id, answer)
        lucky = random.randint(0, 999999)
        if lucky == 999999:
            bot.send_message(message.chat.id, "set")


bot.polling(none_stop= True, interval= 0)