const canva = require('canvacord')
const Discord = require("discord.js")
module.exports = {
    name: 'ohno',
    aliases: ['ohnoe'],
    cooldown: 2,
    description: 'colors',
    permissions: ['SEND_MESSAGES'],
async execute(client, message, args, profileData){
            const user = message.mentions.users.first() || message.author;
        let text = args.join(" ")
        if(!text[0]) return message.channel.send("Please send some text then try again!")
            
            let image = await canva.Canvas.ohno(text)

            let ohno = new Discord.MessageAttachment(image, "ohno.png")

            message.channel.send(ohno)
        }
    }
    

