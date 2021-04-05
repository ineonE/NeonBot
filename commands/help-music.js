const Discord = require("discord.js")
module.exports = {
    name: 'help-music',
    aliases: ['help-musical'],
    cooldown: 2,
    description: 'tedsa',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('🎶 Music commands!')
        .setDescription('`%play`, `%leave`')
        .setFooter('To get more information on a command do %help-(commandnamehere)!')
        message.channel.send(newEmbed)
    }
}