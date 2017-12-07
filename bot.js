const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "465573784:AAGp3Kb2nHHUsahI-0QRHOWkn_MjlVkbrsc";

var bot = new TelegramBot(token, {polling: true});

bot.onText(/так блэт/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "test");
})
