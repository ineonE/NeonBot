const canva = require("canvacord");

const Discord = require('discord.js')
    module.exports = {
        name: 'wanted',
        aliases: ['wantedd'],
        cooldown: 2,
        description: 'in jail',
        permissions: ['SEND_MESSAGES'],
        async execute(client, message, args){
            const user = message.mentions.users.first() || message.author;

            let avatar = user.displayAvatarURL({dynamic: false, format: "png"})

            let image = await canva.Canvas.wanted(avatar)
            

            let jail = new Discord.MessageAttachment(image, "wanted.png")

            message.channel.send(jail)
        }
    }