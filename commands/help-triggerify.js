const Discord = require("discord.js")
module.exports = {
    name: 'help-triggerify',
    aliases: ['help-trigger'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
    
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%trigger`')
        .addFields(
            {name: 'Usage:', value: '`%triggerify`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Triggerify yourself!'}
            )
            message.channel.send(newEmbed)



   
    }
}