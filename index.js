// const TelegramBot = require('node-telegram-bot-api');
const Telegraf = require('telegraf');

const TG_BOT_TOKEN = '863853752:AAGRZ0qi2kLPsZJOqEKpOnq5RDMTYgsbpqo';

// const bot = new TelegramBot(TG_BOT_TOKEN, { polling: true });

// bot.on('message', msg => {
//     bot.sendMessage(msg.chat.id, `Hi. You typed: ${msg.text}`);
// });

const notes = ['one', 'two', 'three'];




// bot.onText(/startspam/, (msg, match) => {
//     interval = setInterval(() => {
//         bot.sendMessage(notes[i % notes.length])
//     }, 3000);
// });

// bot.onText(/stopspam/, (msg, match) => clearInterval(interval));



const bot = new Telegraf(TG_BOT_TOKEN);
// let interval;
// interval = setInterval(() => {
//     ctx.telegram.sendMessage(notes[i % notes.length]);
// }, 3000);
// bot.command('startspam', (ctx) => {
//     interval = setInterval(() => {
//         ctx.telegram.sendMessage(notes[i % notes.length]);
//     }, 3000);
// });
// bot.command('stopspam', () => clearInterval(interval));

let interval;
bot.command('go', (ctx) => {
    ctx.reply('started');
        let i =0;
        interval = setInterval(() => {
                ctx.reply(notes[i % notes.length]);
                i++;
            }, 3000);
});

bot.command('no', (ctx) => {
    ctx.reply('stopped');
    clearInterval(interval);
    
});


bot.on('text', (ctx) => ctx.reply('Hello World'));
bot.launch();



