const Discord = require('discord.js');
const commandHandler = require('./commands');
const client = new Discord.Client();

require('dotenv').config();

client.once('ready', () => {
  console.log('Beep beep I am ready!');
});

client.on('message', commandHandler);

client.login(process.env.BOT_TOKEN);