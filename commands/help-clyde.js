const Discord = require("discord.js")
module.exports = {
    name: 'help-clyde',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%clyde`')
        .addFields(
            {name: 'Usage:', value: '`%clyde <message>`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Make clyde say something! Now don\'t go *too* deep!'}
            )
            message.channel.send(newEmbed)



   
    }
}