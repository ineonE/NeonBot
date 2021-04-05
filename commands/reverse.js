const Discord = require('discord.js')
module.exports = {
    name: 'reverse',
    aliases: [],
    cooldown: 2,
    description: 'e',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args){
        const text = args.join(" ")
        if(!text) return message.channel.send('Please type something to reverse!')
        let Rarray = text.split("")
        let reverseArray = Rarray.reverse()

        let result = reverseArray.join("")
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Reverse')
        .setDescription(`${result}`)
        .setTimestamp()
        message.channel.send(newEmbed)
    }
}