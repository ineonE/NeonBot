const Discord = require("discord.js")
module.exports = {
    name: 'help-avatar',
    aliases: ['help-ava'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%avatar`')
        .addFields(
            {name: 'Usage:', value: '`%avatar || %avatar <mention>`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Shows your avatar!'}
            )
            message.channel.send(newEmbed)



   
    }
}