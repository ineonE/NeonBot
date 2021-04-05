module.exports = {
    name: '8ball',
    aliases: ['ball'],
    cooldown: 2,
    description: 'yr',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord){
        if(!args[0]) return message.channel.send('Please ask a question!')
      
        const answers = [
            'Yes', 'No', 'Maybe', 'Never', 'For sure!', 'Probably not', 'Outlook good!', 'I dont think so'
        ];
        const a = answers[Math.floor(Math.random() * answers.length)]

     

        message.channel.send(`:8ball: Question: ${args.join(' ')}\nAnswer: ${a}`)
    }
}