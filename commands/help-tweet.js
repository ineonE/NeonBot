const Discord = require("discord.js")
module.exports = {
    name: 'help-tweet',
    aliases: ['tweet-help'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
      
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%tweet`')
        .addFields(
            {name: 'Usage:', value: '`%tweet <tweet>`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Tweet something on twitter!'}
            )
            message.channel.send(newEmbed)



   
    }
}