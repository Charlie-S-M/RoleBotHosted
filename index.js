const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njc1MzYwNTk3Mjg5ODYxMTUy.Xj2B2A.my_jSo1aEnDK2IGpf4Y9kxUEONQ';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(message.content === "Hi"){
        msg.reply('Hello!');
    }
})

bot.login(token);