const Discord = require("discord.js")
module.exports = {
    name: 'help-mod',
    aliases: ['mod-help'],
    cooldown: 2,
    description: 'tedsa',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('🚓 Moderation commands!')
        .setDescription('`%purge`, `%ban`, `%kick`, `%slowmode`, `%unlock`, `%lock`')
        .setFooter('To get more information on a command do %help-(commandnamehere)!')
        message.channel.send(newEmbed)
    }
}