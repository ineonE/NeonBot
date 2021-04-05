const Discord = require("discord.js")
module.exports = {
    name: 'help-rps',
    aliases: ['help-rockpaperscissors'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%rps`')
        .addFields(
            {name: 'Usage:', value: '`%rps paper || %rps scrissors || %rps rock`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Play rock paper scissors with the bot!'}
            )
            message.channel.send(newEmbed)



   
    }
}