module.exports = {
    name: 'rps',
    aliases: ['rockpaperscissors'],
    cooldown: 2,
    description: 'e',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord){
        const botChoice = Math.floor(Math.random() * 2) + 1 // random number
        let botEmoji;
        let playerEmoji;
        let botChoiceStr;

        if(!args[0]) return message.channel.send('You need to state your choice. rock, paper, scissors.')
        if(!['rock', 'paper', 'scissors'].includes(args[0])) return message.channel.send('Your choice was not one of the options: rock, paper, scissors.')
        if (botChoice == 1) {
            botChoiceStr = 'rock'
            botEmoji = ':rock: Rock'
        }
        if (botChoice == 2) {
                   botChoiceStr = 'paper'
            botEmoji = ':newspaper: Paper';
        }
        if (botChoice == 3) {
            botChoiceStr = 'scissors'
            botEmoji = ':scissors: Scissors';
        }

        if(args[0] == 'rock') playerEmoji = ':rock: Rock'
        if(args[0] == 'paper') playerEmoji = ':newspaper: Paper'
        if(args[0] == 'scissors') playerEmoji = ':scissors: Scissors'
        console.log(botChoice)
        console.log(botEmoji)

        if(botChoiceStr == args[0]) return message.channel.send(`I picked: ${botEmoji}, you picked: ${playerEmoji}. We tied.`)
        if(args[0] == 'rock')
        if (botChoiceStr == 'paper') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}, You lost!`)
        else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}, You won!`)
        else if (args[0] == 'paper') {
            if (botChoiceStr == 'scissors') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}, You lost!`)
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}, You won!`)

        } else if (args[0] == 'scissors') {
                if (botChoiceStr == 'rock') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}, You lost!`)
                else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}, You won!`)
        }
  
        }
    }

