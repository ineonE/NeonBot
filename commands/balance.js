
module.exports = {
    name: 'balance',
    aliases: ['bal'],
    cooldown: 2,
    descripton: 'e',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, cmd, Discord, profileData){

      
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.tag} balance!`)
              .setDescription(`**roux:** ${profileData.roux}! \n **bank:** ${profileData.bank}!`)
          .setTimestamp()
        
        message.channel.send(newEmbed)

    },


    

}; 

