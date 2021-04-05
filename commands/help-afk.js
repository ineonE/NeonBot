const Discord = require("discord.js")
module.exports = {
    name: 'help-afk',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
 
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%afk')
        .addFields(
            {name: 'Usage:', value: '`%afk`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Marks you as AFK so if anyone tries pinging you it will say that you\'re AFK!'}
            )
            message.channel.send(newEmbed)



   
    }
}