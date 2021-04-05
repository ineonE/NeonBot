const Discord = require("discord.js")
module.exports = {
    name: 'help-jail',
    aliases: ['jail-help'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%jail`')
        .addFields(
            {name: 'Usage:', value: '`%jail`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Make your profile picture be in jail!'}
            )
            message.channel.send(newEmbed)



   
    }
}