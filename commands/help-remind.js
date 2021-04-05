const Discord = require("discord.js")
module.exports = {
    name: 'help-remind',
    aliases: [],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%remind`')
        .addFields(
            {name: 'Usage:', value: '`%remind <seconds> <reason>`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Reminds you something!'}
            )
            message.channel.send(newEmbed)



   
    }
}