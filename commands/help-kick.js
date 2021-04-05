const Discord = require("discord.js")
module.exports = {
    name: 'help-kik',
    aliases: ['help-k'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%kick`')
        .addFields(
            {name: 'Usage:', value: '`%kick <mention> <reason>`'},
            {name: 'Category:', value: 'Moderation'},
            {name: 'Description:', value: 'Kicks the mentioned user from the server!'}
            )
            message.channel.send(newEmbed)



   
    }
}