const Discord = require("discord.js")
module.exports = {
    name: 'help-delete',
    aliases: ['help-deletetrash'],
    cooldown: 2,
    description: 'helps with colors lol',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%delete`')
        .addFields(
            {name: 'Usage:', value: '`%delete`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Delete this trash'}
            )
            message.channel.send(newEmbed)


    }
}