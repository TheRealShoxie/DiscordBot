// Discord reference from discord.js
const Discord = require('discord.js');

// Aquiring token.json file
const tokenFile = require('./token.json');

//----------------------------------------------------------

// Getting an instance of bot, which ignores  @everyone
const bot = new Discord.Client({disableEveryone: true});



bot.login(tokenFile.token);