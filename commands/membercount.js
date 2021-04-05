
const Discord = require("discord.js")
module.exports = {
    name: 'membercount',
    aliases: ['membercheck'],
    cooldown: 2,
    description: 'Shows the member count in the guild you are in!',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const membersInServer = message.guild.memberCount
        const newEmbed = new Discord.MessageEmbed()

            .setTitle(`${message.guild.name} has ${membersInServer} members in the server!`)

            message.channel.send(newEmbed)
    }
} 