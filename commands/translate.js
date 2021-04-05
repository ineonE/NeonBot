const translate = require('@k3rn31p4nic/google-translate-api')
const Discord = require("discord.js")
module.exports = {
    name: 'translate',
    aliases: ['trans'],
    cooldown: 2,
    permissions: ['SEND_MESSAGES'],
    description: 'Translate a message',
    async execute(client, message, args){
        let language = args[0]
        let text = args.slice(1).join(" ")

        if(!language) return message.channel.send("What language am i supposed to translate?????")
        if(language.length !== 2) return message.channel.send("Language must be 2 letters. Example %translate en hola!")
        if(!text) return message.channel.send("What do i translate?")

        const result = await translate(text, { to: language})

     
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Google Translate')
        .addFields(
            {name: 'Input', value: `\`${text}\``},
            {name: 'Output', value: `\`${result.text}\`` }

        )
        message.channel.send(newEmbed)
        

    }
}