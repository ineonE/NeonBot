const Discord = require("discord.js")
let questions = [
    {
        title: "Most liked programming language",
        options: ["Javascript","Python"],
        correct: 1
    }
]

module.exports = {
    name: 'trivia',
    aliases: ['triv'],
    cooldown: 3,
    description: 'sadasda',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord){
        let q = questions[Math.floor(Math.random()*(questions.length))]
        let i = 0
        const newEmbed = new Discord.MessageEmbed()
        .setTitle(q.title)
        .setDescription(q.options.map(opt=>{
            i++;
            return `${i}` - `${opt}\n`
        }))
        .setColor('RANDOM')
        .setFooter(`Reply to this message with the correct question number! You have 15 seconds.`)
        message.channel.send(newEmbed)
    
        try{
            let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: ["time"]})
            if(parseInt(msgs.first().content)==questions[0].correct){
                return message.channel.send('You got it correct, nice job!')

            } else if(isNaN(msgs.first().content)) {
                return message.channel.send('Not a number try.')
            } else if(parseInt(msgs.first().content) !== questions[0].correct){
          return message.channel.send("wrong")
}
        }catch(e){
            return message.channel.send('You did not answer, try next time!')
        }
    }
        }