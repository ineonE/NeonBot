const Discord = require('discord.js')
module.exports = {
    name: 'help-insult',
    aliases: [],
    cooldown: 2,
    description: 'e',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%insult`')
        .addFields(
            {name: 'Usage:', value: '`%insult <@mention>`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Insult someone!'}
            )
            message.channel.send(newEmbed)
            
    
    }
  



}
