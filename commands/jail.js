const Discord = require("discord.js")
const canva = require("canvacord");
    module.exports = {
        name: 'jail',
        aliases: ['jailed'],
        cooldown: 2,
        description: 'in jail',
        permissions: ['SEND_MESSAGES'],
        async execute(client, message, args){
            const user = message.mentions.users.first() || message.author;

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"})

            let image = await canva.Canvas.jail(avatar)

            let jail = new Discord.MessageAttachment(image, "jail.png")

            message.channel.send(jail)
        }
    }