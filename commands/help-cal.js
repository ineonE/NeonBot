const Discord = require("discord.js")
module.exports = {
    name: 'help-cal',
    aliases: ['help-calculator'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%cal`')
        .addFields(
            {name: 'Usage:', value: '`%cal add <firstnumber> <secondnumber> || %cal subtract <firstnumber> <secondnumber> || %cal mutliply <firstnumber> <secondnumber> || %cal divide <firstnumber> <secondnumber>`'},
            {name: 'Category:', value: 'Utility'},
            {name: 'Description:', value: 'Calculates something!'}
            )
            message.channel.send(newEmbed)



   
    }
}