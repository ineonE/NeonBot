const Discord = require("discord.js")
module.exports = {
    name: 'help-play',
    aliases: ['help-pl'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%play`')
        .addFields(
            {name: 'Usage:', value: '`%play <music>`'},
            {name: 'Category:', value: 'Music'},
            {name: 'Description:', value: 'Plays music in a voice channel that you\'re in!'}
            )
            message.channel.send(newEmbed)



   
    }
}