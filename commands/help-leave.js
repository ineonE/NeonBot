const Discord = require("discord.js")
module.exports = {
    name: 'help-leave',
    aliases: ['help-leavee'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%leave`')
        .addFields(
            {name: 'Usage:', value: '`%leave`'},
            {name: 'Category:', value: 'Music'},
            {name: 'Description:', value: 'Stops the music and the bot from playing music!'}
            )
            message.channel.send(newEmbed)



   
    }
}