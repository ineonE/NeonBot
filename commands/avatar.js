const Discord = require("discord.js")
module.exports = {
    name: 'avatar',
    aliases: ['ava', 'profilepic'],
    cooldown: 2,
    description: 'avatar command',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const user = message.mentions.users.first() || message.author;

        const newEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.tag}'s avatar!`)
     //https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public
     .setDescription(`[avatar URL](${user.avatarURL()})`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 2048}))
        .setTimestamp()

        message.channel.send(newEmbed)
        
    }
}