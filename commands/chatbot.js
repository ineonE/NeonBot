const { chatBot } = require('reconlx')
module.exports = {
    name: 'chatbot',
    aliases: ['chat'],
    cooldown: 1,
    description: 'hello world',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, Discord, profileData) {
        if(!args[0]) return message.reply('Please tell a message that you want to chat with! example: %chatbot hello!')
     chatBot(message, args.join(" "))
    }
}