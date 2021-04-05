const Discord = require("discord.js")
module.exports = {
    name: 'help-color',
    aliases: ['help-hexcolor'],
    cooldown: 2,
    description: 'helps with colors lol',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%color`')
        .addFields(
            {name: 'Usage:', value: '`%color (hexcodehere)`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Shows a png file with a color!'}
            )
            message.channel.send(newEmbed)


    }
}