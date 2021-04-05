const Discord = require("discord.js")
module.exports = {
    name: 'help-advice',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
 
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%advice`')
        .addFields(
            {name: 'Usage:', value: '`%dvice`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Shows a JSON embed of some advice!'}
            )
            message.channel.send(newEmbed)



   
    }
}