
module.exports = {
    name: 'shutdown',
    aliases: ['sd'],
    cooldown: 2,
    description: 'shutdown',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, Discord){
        if(message.author.id !== '771585035442716673') return message.channel.send('Only the owner has permission to use this command.')
    

     message.channel.send('Turning off bot.........')
     process.exit()
    }
    }