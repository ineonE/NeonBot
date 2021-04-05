const Discord = require("discord.js")
module.exports = {
    name: 'help-slowmode',
    aliases: ['help-sm', 'help-slow'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%slowmode`')
        .addFields(
            {name: 'Usage:', value: '`%slowmode <number>`'},
            {name: 'Category:', value: 'Moderation'},
            {name: 'Description:', value: 'Changes the slowmode in the channel that the command was typed!'}
            )
            message.channel.send(newEmbed)



   
    }
}