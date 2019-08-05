const TelegramBot = require('node-telegram-bot-api');

const TG_BOT_TOKEN = '863853752:AAGRZ0qi2kLPsZJOqEKpOnq5RDMTYgsbpqo';

const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `privet. You typed: ${msg.text}`);
})

