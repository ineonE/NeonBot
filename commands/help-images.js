const Discord = require("discord.js")
module.exports ={
    name: 'help-images',
    aliases: ['images-help'],
    cooldown: 2,
    description: 'yes',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('📷 Image commands!')
        .setDescription('`%meme`, `%tweet`, `%triggerify`, `%color`, `%jail`, `%ohno`, `%wanted`, `%delete`')
        .setFooter('To get more information on a command do %help-(commandnamehere)!')
        
        message.channel.send(newEmbed)
    }
}