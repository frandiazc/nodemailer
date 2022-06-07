const telegrambot = require('node-telegram-bot-api');
const request = require('request');
const fs = require('fs');
const token = '5395818951:AAFIapyMNBhN1Tj6fLoGucqrOjxv2aEe4T8';
const bot = new telegrambot(token, {polling: true});
bot.onText(/\/start/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Iniciado');
});
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
