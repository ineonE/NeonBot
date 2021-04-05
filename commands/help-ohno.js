const Discord = require("discord.js")
module.exports = {
    name: 'help-ohno',
    aliases: ['ohno-help'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%ohno`')
        .addFields(
            {name: 'Usage:', value: '`%ohno <message>`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Dog lol idk what to put here'}
            )
            message.channel.send(newEmbed)



        }
    }