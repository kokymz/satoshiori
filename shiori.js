const Discord = require('discord.js');
const client = new Discord.Client(400334800071819264);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'love?') {
    	message.reply('kim');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
