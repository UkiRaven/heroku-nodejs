const TelegramBot = require('node-telegram-bot-api');
const TOKEN = require('./bot-token').token;

var bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/так блэт/i,  (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendSticker(chatId, "sticker.webp");
});

bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.chat.id;
    var resp = match[1];
    bot.sendMessage(fromId, resp);
});
