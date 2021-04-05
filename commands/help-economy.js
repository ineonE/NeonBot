const Discord = require("discord.js")
module.exports ={
    name: 'help-economy',
    aliases: ['economy-help'],
    cooldown: 2,
    description: 'yes',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('💵 Economy commands!')
        .setDescription('`%bal`, `%beg`, `%deposit`, `%withdraw`, `%give`')
        .setFooter('To get more information on a command do %help-(commandnamehere)')
        
        message.channel.send(newEmbed)
    }
}