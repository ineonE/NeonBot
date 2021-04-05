const Discord = require("discord.js")
const fetch = require('node-fetch')
module.exports = {
    name: 'meme',
    aliases: ['funny'],
    cooldown: 2,
    description: 'meme lol',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(async json => {
            const memeEmbed = new Discord.MessageEmbed()
            .setTitle(json.title)
            .setImage(json.url)
            .setURL(`${json.postLink}`)
            .setFooter(`${json.subreddit}`)
            message.channel.send(memeEmbed)

        });
        }
        }