const { tictactoe } = require('reconlx')

module.exports = {
    name: 'ttt',
    aliases: ['tictactoe'],
    cooldown: 2,
    description: 'tictactoe',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord, profileData){
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a member to play tictactoe with!')

        new tictactoe({
            player_two:  member,
            message: message
        })
    }
}