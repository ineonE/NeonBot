const fs = require('fs')
module.exports = {
    name: 'blacklist',
    aliases: ['bl'],
    cooldown: 0,
    description: 'a',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord){
        if(message.author.id !== '771585035442716673') return message.channel.send('Only the owner of the bot has permission to use this command.')
        const mentionedUser = message.mentions.users.first()
        if(!args[0]) return message.channel.send("You did not mention a user!")
        if (!mentionedUser) return message.channel.send('THe mentioned user does not exist!')
        if (mentionedUser.bot) return message.channel.send('The mentioned user cannot be a bot!')

        
        const blacklistObject = {
            userTag: message.author.tag,
         
        };
        let blacklist = await JSON.parse(fs.readFileSync('./blacklist.json', "utf-8"));
        if(!blacklist) return console.log('issue parseing blacklist.json')
        if(!blacklist[mentionedUser.id]) blacklist[mentionedUser.id] = blacklistObject

        try {
            await fs.writeFile('./blacklist.json', JSON.stringify(blacklist, null, 2), (err) => {
                if (err) {
                    return console.log(err)
                } else {
                    console.log("user blacklisted!" + mentionedUser.tag)
                    message.channel.send(`Blacklisted <@${mentionedUser.id}>`)
                }
            });
        } catch (err) {
            console.log(err)
            message.channel.send('Error Blacklisting user!')
    


        }
    }
}