const Discord = require("discord.js")
module.exports = {
    name: 'help-ttt',
    aliases: ['help-tictactoe'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%ttt`')
        .addFields(
            {name: 'Usage:', value: '`%ttt <@mention>`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Play tictactoe with a mentioned user!'}
            )
            message.channel.send(newEmbed)



   
    }
}