const canva = require('canvacord')
const Discord = require("discord.js")
module.exports = {
    name: 'clyde',
    aliases: [],
    cooldown: 2,
    description: 'crtehetjekgrjd',
    permissions: ['SEND_MESSAGES'],
   async execute(client, message, args, profileData){
          let clyde = args.join(" ")
          if(!args[0]) return message.channel.send('What do you want clyde to say!')

          
            let image = await canva.Canvas.clyde(clyde)

            let send = new Discord.MessageAttachment(image, "clyde.png")

            message.channel.send(send)
        }
    }
    