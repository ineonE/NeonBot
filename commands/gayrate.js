module.exports = {
    name: 'gayrate',
    aliases: ['gaycheck'],
    cooldown: 2,
    description: 'See how gay you are!',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args, Discord, profileData){
        const answers = [
            'You are 1% gay!', 'You are 23% gay!', 'You are 31% gay!', 'You are 55% gay!', ' you are 0% gay', ' you are 100% gay', 'You are 12% gay!', 'You are 45% gay!', ' You are 67% gay!', ' you are 3172837128371823817381273812738273817% gay!'
           
        ]
        const a = answers[Math.floor(Math.random() * answers.length)]


        message.channel.send(`${a}`)
    }
}