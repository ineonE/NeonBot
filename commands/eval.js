const { inspect } = require('util')
module.exports = {
    name: 'eval',
    aliases: ['evaluate'],
    cooldown: 0,
    description: 'evals code',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord, profileData){
            if(message.author.id !== '771585035442716673') return message.channel.send('Only the owner of the bot has permission to use this command.')

            const code = args.join(" ")
            if(!code) return message.reply('Please provide some code to evaluate')
        try{
            const result = await eval(code)
            let output = result;

            if(typeof result !== 'string')
            output = inspect(result)

            message.channel.send(output, { code: 'js'})
        } catch (error) {
            message.channel.send(`${error}`)
      
        }

    }
}