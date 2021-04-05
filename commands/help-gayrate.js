const Discord = require("discord.js")
module.exports = {
    name: 'help-gayrate',
    aliases: ['help-gaycheck'],
    cooldown: 2,
    description: 'yeah',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%gayrate`')
        .addFields(
            {name: 'Usage:', value: '`%gayrate`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'See how gay you are!'}
            )
            message.channel.send(newEmbed)


    }
}