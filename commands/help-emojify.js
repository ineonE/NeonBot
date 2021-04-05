const Discord = require("discord.js")
module.exports = {
    name: 'help-emojify',
    aliases: ['help-emoji'],
    cooldown: 2,
    description: 'yeah',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%emojify`')
        .addFields(
            {name: 'Usage:', value: '`%emojify <text>`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Convert text into emojis!'}
            )
            message.channel.send(newEmbed)


    }
}