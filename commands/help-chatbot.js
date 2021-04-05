const Discord = require("discord.js")
module.exports = {
    name: 'help-chatbot',
    aliases: ['help-chat'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%chatbot`')
        .addFields(
            {name: 'Usage:', value: '`%chatbot <message>`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Talk with the bot!'}
            )
            message.channel.send(newEmbed)



   
    }
}