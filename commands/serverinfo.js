module.exports = {
    name: 'serverinfo',
    aliases: [],
    cooldown: 3,
    description: 'adfsjsfhsrofjhsikgbudil;kbhjfjxugrskoiuyf gredguiorwpekjshgvfywejjghshdjkpoi',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){
        const membersInServer = message.guild.memberCount
        const channels = message.guild.channels.cache.size
        const roles = message.guild.roles.cache.size
        const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL({ dynamic: true}))
        .addFields(
            {name: 'Name:', value: `${message.guild.name}`},
            {name: 'ID:', value: `${message.guild.id}`},
            {name: 'Owner:', value: `${message.guild.owner.user.username}`},
            {name: 'Members:', value: `${membersInServer}`, inline: true},
            {name: 'Region:', value: `${message.guild.region}`, inline: true},
            {name: 'Channels:', value: `${channels}`, inline: true},
            {name: 'Roles:', value: `${roles}`, inline: true}
          
        )
        message.channel.send(newEmbed)
    }
}