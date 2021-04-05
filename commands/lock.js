const Discord = require('discord.js')

module.exports = {
    name: 'lock',
    aliases: [],
    cooldown: 2,
    description: 'e',
    permissions: ['MANAGE_CHANNELS'],
    async execute(client, message, args){
        const channel = message.mentions.channels.first()
        if(!channel) return message.channel.send('Please mention a vaild channel for me to lock!')
        const roletoFind = args.slice(1).join(" ")
 
    const role = message.guild.roles.cache.find(r => r.id === roletoFind)
    if(!role) return message.channel.send("Please give a vaild role id!")

    const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`Channel locked for ${role}`)
    .setTimestamp()
   
    channel.updateOverwrite(role, {
        SEND_MESSAGES: false
    })
    await channel.send(newEmbed)
}
}