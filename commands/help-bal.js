const Discord = require("discord.js")
module.exports = {
    name: 'help-bal',
    aliases: ['help-balance'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
 
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%bal`')
        .addFields(
            {name: 'Usage:', value: '`%bal`'},
            {name: 'Category:', value: 'Economy'},
            {name: 'Description:', value: 'Checks how much roux you have!'}
            )
            message.channel.send(newEmbed)



   
    }
}