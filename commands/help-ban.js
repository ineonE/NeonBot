const Discord = require("discord.js")
module.exports = {
    name: 'help-ban',
    aliases: ['help-b'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%ban`')
        .addFields(
            {name: 'Usage:', value: '`%ban <mention> <reason>`'},
            {name: 'Category:', value: 'Moderation'},
            {name: 'Description:', value: 'Bans the mentioned user from the server!'}
            )
            message.channel.send(newEmbed)



   
    }
}