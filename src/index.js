const Discord = require('discord.js');
const client = new Discord.Client();
const channelName = 'bot-trial';

require('dotenv').config();

client.once('ready', () => {
  console.log('Beep beep I am ready!');
});

client.on('message', async (msg) => {
  if (msg.channel.name === channelName) {
    if (msg.content.toLowerCase() === 'ping') {
      await msg.reply('pong');
      console.log('Ping pong! (sent)');
    }
  }
});

client.login(process.env.BOT_TOKEN);