const request = require('request');
module.exports = {
    name: 'mine',
    aliases: ['discoin'],
    cooldown: 2,
    description: 'Mine a couple of Discoins',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord){
        request('http://www.google.com', function (error, response, body) {
          console.error('error:', error);
          console.log('statusCode:', response && response.statusCode);
          message.channel.send(body);
        });
    }
}
