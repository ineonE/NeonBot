const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = {
    name: 'insult',
    aliases: [],
    cooldown: 2,
    description: 'Says a roast',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args){
        if(!args[0]) return message.channel.send('To use this command you have to do: \`%insult @user\`')
        const mentionedUser = message.mentions.users.first();
        if(!mentionedUser) return message.channel.send('The user mentioned is not in the server!')
        let msg = await message.channel.send('Getting a insult.......')
        fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then(res => res.json())
        .then(json => {
            const roastEmbed = new Discord.MessageEmbed()
            .setTitle(`${mentionedUser.tag} Insulted`)
            .setDescription(`${json.insult}`)
            msg.edit(roastEmbed)
        });
    }
}