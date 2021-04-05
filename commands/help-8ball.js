const Discord = require("discord.js")
module.exports = {
    name: 'help-8ball',
    aliases: ['help-ball'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
 
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%8ball`')
        .addFields(
            {name: 'Usage:', value: '`%8ball <question>`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: 'Ask the bot a question!'}
            )
            message.channel.send(newEmbed)



   
    }
}