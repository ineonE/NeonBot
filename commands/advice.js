// const { Random } = require('something-random-on-discord')
const random = require("something-random-on-discord").Random

module.exports = {
    name: 'advice',
    aliases: [],
    cooldown: 2,
    desacription: 'e',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){
        let data = await random.getAdvice()
        message.channel.send(data)
        console.log(data)
    }
}