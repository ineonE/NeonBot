const canva = require("canvacord");
const { MessageAttachment } = require('discord.js')
const Discord = require("discord.js")
    module.exports = {
        name: 'delete',
        aliases: ['deletetrash'],
        cooldown: 2,
        description: 'in jail',
        permissions: ['SEND_MESSAGES'],
        async execute(client, message, args){
            const user = message.mentions.users.first() || message.author;

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"})

            let image = await canva.Canvas.delete(avatar)

            let deletepfp = new Discord.MessageAttachment(image, "delete.png")

            message.channel.send(deletepfp)
        }
    }