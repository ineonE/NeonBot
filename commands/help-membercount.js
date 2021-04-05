const Discord = require("discord.js")
module.exports = {
    name: 'help-membercount',
    aliases: ['help-membercheck'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%membercount`')
        .addFields(
            {name: 'Usage:', value: '`%membercount`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Shows the member count in the guild you are in!'}
            )
            message.channel.send(newEmbed)



        }
    }
 // Shows the member count in the guild you are in!