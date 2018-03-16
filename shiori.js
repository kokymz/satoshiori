const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'love?') {
    	message.reply('kim');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDAwMzM0ODAwMDcxODE5MjY0.DY1W4g.wbDzQ6x77M97PyWaO1_ycXZu2S0);
