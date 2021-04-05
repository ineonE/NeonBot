
module.exports = {
    name: 'ping',
    aliases: ['latency', 'pong'],
    cooldown: 5,
    description: "This command shows the latency of the bot",
    permissions: ["SEND_MESSAGES"],

    execute(client, message, cmd, args, Discord, profileData){


        message.reply(`Pinging.....`).then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

    

           const newEmbed = new Discord.MessageEmbed()
           .setColor('RANDOM')
           .setTitle(':ping_pong: P O N G')
           .addFields(
               {name: 'Latency', value: `${ping}`, inline: true},
               {name: 'API Latency', value: `${client.ws.ping}`, inline: true}


           )

           resultMessage.edit(newEmbed)
        })

    }
}
    
