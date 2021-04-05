const Discord = require("discord.js")
module.exports = {
    name: 'help-wanted',
    aliases: ['help-wantede'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, profileData){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%wanted`')
        .addFields(
            {name: 'Usage:', value: '`%wanted || %wanted <mention>`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Shows your profile pic but you\'r wanted!'}
            )
            message.channel.send(newEmbed)



   
    }
}