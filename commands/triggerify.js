const canva = require("canvacord");
const Discord = require("discord.js")
    module.exports = {
        name: 'triggerify',
        aliases: ['trigger'],
        cooldown: 2,
        description: 'Shows your profile pic but triggered!',
        permissions: ['SEND_MESSAGES'],
        async execute(client, message, args){
            const user = message.mentions.users.first() || message.author;


            let avatar = user.displayAvatarURL({dynamic: false, format: "png"})

            let image = await canva.Canvas.trigger(avatar)

            let triggered = new Discord.MessageAttachment(image, "triggered.gif")

            message.channel.send(triggered)
        }
    }