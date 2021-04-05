const profileModel = require('../models/profileSchema')
module.exports = {
    name: 'give',
    aliases: [],
    cooldown: 2,
    description: 'e',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){

        
        if(!args.length) return message.channel.send('You need to mention a user to give them coins!');
        const amount = args[1];
        const target = message.mentions.users.first();
        if(!target) return message.channel.send('That user does not exist!')

        if(amount % 1 != 0 || amount <= 0) return message.channel.send('To give that user roux the amount must be a whole number!');
        if(amount > profileData.roux) return message.channel.send(`You don't dont have amount of roux to give!`)

        
        try {
            const targetData = await profileModel.findOne({ userID: target.id});
            if(!targetData) return message.channel.send('That user does not have a profile (roux account)')

            await profileModel.findOneAndUpdate(
                {
                    userID: target.id
                },
                {
                $inc: {
                    roux: amount,
                },
            }
            )
            await profileModel.findOneAndUpdate(
            {
                userID: message.author.id
            },
            {
                $inc: {
                    roux: -amount
                },
            }
            )

return message.channel.send(`${target} has been given ${amount} roux!`)
    } catch (err) {
        console.log(err)
    }
}
}

