module.exports = {
    name: 'reportbug',
    aliases: [],
    cooldown: 150,
    description: 'a',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){
        const owner = client.users.cache.get('771585035442716673');

        const query = args.join(" ")
        if(!query) return message.reply('Please specify the bug!')

        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addFields(
            {name: 'Author', value: `${message.author}`},
            {name: 'Guild', value: `${message.guild.name}`},
            {name: 'Report', value: `${query}`}
        

        )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
        .setTimestamp()

        owner.send(reportEmbed)
        message.channel.send('Bug report has been sent!')
    }
}