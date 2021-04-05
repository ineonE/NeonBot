const db = require('../models/afkSchema')
module.exports = {
    name: 'afk',
    aliases: [],
    cooldown: 10,
    description: 'e',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData) {
        const reason = args.join[0]
        const { guild, author } = message;
        await db.findOne( { guildId: guild.id, userId: author.id }, async (err, res) => {
            if (err) return message.channel.send('There was an error while trying to set you\'re AFK!')

            if (!res) {
                const newData = new db({
                    guildId: guild.id,
                    userId: author.id
                })
                newData.save().then(() => {
                    return message.channel.send("You have set you\'re AFK status, to disable you're afk status do %afk again!")
                    


                    
                })
            } else if (res) {
                await db.findOneAndDelete({ guildId: guild.id, userId: author.id}).then(() => {
                    return message.channel.send("You have disabled you\'re AFK status!")
                  
                  
                })

            }
        })
       
    }
}