module.exports = {
    name: 'leave',
    aliases: ['leav'],
    cooldown: 2,
    description: 'Stops the bot and leaves the channel',
    permissions: ['CONNECT'],
    async execute(client, message, args, Discord, profileData){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to stop the music!')
        await voiceChannel.leave()
        await message.channel.send('Leaving voice channel..........')
    }
}