const Discord = require("discord.js")
module.exports = {
    name: 'help-serverinfo',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%serverinfo`')
        .addFields(
            {name: 'Usage:', value: '`%serverinfo`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Shows some information about the guild you are in!'}
            )
            message.channel.send(newEmbed)



   
    }
}