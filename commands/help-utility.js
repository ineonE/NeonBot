const Discord = require("discord.js")
module.exports = {
    name: 'help-utility',
    aliases: ['utility-help'],
    cooldown: 2,
    description: 'tedsa',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Utility commands!')
        .setDescription('`%avatar`, `%membercount`, `%translate`, `%cal`, `%remind`, `%ping`, `%reportbug`, `%afk`, `%covidstats`, `%advice`')
        .setFooter('To get more information on a command do %help-(commandnamehere)!')
        message.channel.send(newEmbed)
    }
}