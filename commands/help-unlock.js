const Discord = require("discord.js")
module.exports = {
    name: 'help-unlock',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%unlock`')
        .addFields(
            {name: 'Usage:', value: '`%unlock <channelmention> <roleid>`'},
            {name: 'Category:', value: 'Moderation'},
            {name: 'Description:', value: 'Unocks the channel for a role so they can chat again!'}
            )
            message.channel.send(newEmbed)



   
    }
}