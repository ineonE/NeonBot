module.exports = {
    name: 'slowmode',
    aliases: ['sm', 'slow'],
    cooldown: 2,
    description: 'slowmode',
    permissions: ['MANAGE_CHANNELS'],
    async execute(client, message, args, Discord, profileData) {
        if(args[0] > 21600) return message.reply("You cannot set the slowmode higher then 21600 seconds!");
        if(!args[0]) return message.channel.send('Please type in a number!')
        if(isNaN(args[0]))return message.channel.send('That is a not a number!')
        message.channel.setRateLimitPerUser(args[0])

        message.channel.send(`Slowmode has been changed!`)
    }
    
}