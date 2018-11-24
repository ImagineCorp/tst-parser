const Discord = require('discord.js');
const client = new Discord.Client();
const tokens = require('./token');
const parser = require('./src/parser.js')

client.on('ready', () => {
    console.log('Hello world!')
});

client.on('message', (message) => {
    if(message.content === 'parse'){
        parser.run(client, message)
    }
});

client.login(tokens.discord);