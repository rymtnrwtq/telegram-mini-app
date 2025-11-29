const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual token
const token = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/start"
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Mini App',
            web_app: { url: 'https://kettle017.github.io/telegram-mini-app-text/' } // Replace with your hosted URL
          }
        ]
      ]
    }
  };
  bot.sendMessage(chatId, 'Click the button below to open the Mini App:', opts);
});

console.log('Bot is running...');
