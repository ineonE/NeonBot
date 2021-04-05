const canva = require("canvacord");
const Discord = require("discord.js")
module.exports = {
    name: 'color',
    aliases: ['hexcolor'],
    cooldown: 2,
    description: 'color',
    permissions: ['SEND_MESSAGES'],
   async execute(client, message, args, profileData){
          let colorOfChoice = args.join(" ")
          if(!args[0]) return message.channel.send('Provide a vaild HEX code!')

          
            let image = await canva.Canvas.color(colorOfChoice)

            let colour = new Discord.MessageAttachment(image, "color.png")

            message.channel.send(colour)
        }
    }
    
