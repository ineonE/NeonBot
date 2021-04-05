const fetch = require('node-fetch')

const Discord = require("discord.js")
module.exports = {
    name: 'tweet',
    aliases: ['twitter'],
    cooldown: 2,
    description: 'tweet',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args){

        if(!args[0]) return message.channel.send('Please say something to tweet, example: %tweet <tweet>')
    fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
    .then((res) => res.json())
    .then((data) => {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle(`New tweet!`)
        .setImage(data.message)
        .setTimestamp()
        message.channel.send(newEmbed)
    })
    }
}