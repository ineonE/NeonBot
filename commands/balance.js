
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
        .setDescription(`**<:Robux:828313040117825586> roux:** ${profileData.roux}!
          **bank:** ${profileData.bank}!`)
          .setTimestamp()
        
        message.channel.send(newEmbed)

    },


    
    
};