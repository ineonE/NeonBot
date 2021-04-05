const Discord = require("discord.js")
module.exports = {
    name: 'invite',
    aliases: ['inv'],
    cooldown: 2,
    description: 'Shows the bot invite',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
     
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('The bots invite!')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=821509611885821992&permissions=4294967287&scope=bot')
        .setFooter('Pro tip: remove the permissions that you dont want it to have, if the bot doesnt work give it admin')
        
        message.channel.send(newEmbed)
    }

}