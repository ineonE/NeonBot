const Discord = require("discord.js")
module.exports = {
    name: 'help-beg',
    aliases: ['help-beg'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
 
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%beg`')
        .addFields(
            {name: 'Usage:', value: '`%beg`'},
            {name: 'Category:', value: 'Economy'},
            {name: 'Description:', value: 'Beg for roux!'}
            )
            message.channel.send(newEmbed)



   
    }
}