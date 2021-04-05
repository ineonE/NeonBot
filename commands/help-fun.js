const Discord = require("discord.js")
module.exports ={
    name: 'help-fun',
    aliases: ['fun-help'],
    cooldown: 2,
    description: 'yes',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('😀 Fun commands!')
        .setDescription('`%8ball`, `%rps`, `%gayrate`, `%chatbot`, `%emojify`, `%ttt`, `%insult`, `%reverse`')
        .setFooter('To get more information on a command do %help-(commandnamehere)!')
        
        message.channel.send(newEmbed)
    }
}