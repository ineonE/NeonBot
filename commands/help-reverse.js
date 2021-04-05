const Discord = require("discord.js")
module.exports = {
    name: 'help-reverse',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%reverse`')
        .addFields(
            {name: 'Usage:', value: '`%reverse <text>'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Reverses a text!'}
            )
            message.channel.send(newEmbed)



   
    }
}