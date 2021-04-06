const Discord = require("discord.js")
module.exports = {
    name: 'help-kik',
    aliases: ['help-k'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%kill`')
        .addFields(
            {name: 'Usage:', value: '`%kill <mention>`'},
            {name: 'Category:', value: 'Fun'},
            {name: 'Description:', value: '*kill* someone!'}
            )
            message.channel.send(newEmbed)



   
    }
}