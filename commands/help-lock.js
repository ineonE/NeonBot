const Discord = require("discord.js")
module.exports = {
    name: 'help-lock',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%lock`')
        .addFields(
            {name: 'Usage:', value: '`%lock <channelmention> <roleid>`'},
            {name: 'Category:', value: 'Moderation'},
            {name: 'Description:', value: 'Locks the channel for a role so they cannot chat!'}
            )
            message.channel.send(newEmbed)



   
    }
}