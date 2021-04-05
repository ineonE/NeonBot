const profileModel = require("../models/profileSchema")
module.exports = {
    name: "deposit",
    aliases: ['dep'],
    cooldown: 4,
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit amount must be a whole number!');
        try{
            if(amount > profileData.roux) return message.channel.send(`You don't dont have amount of roux to deposit!`)
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            }, {
                $inc: {
                    roux: -amount,
                    bank: amount,
                },
            }
        );

            return message.channel.send(`${message.author.username}, you have deposited ${amount} <:Robux:828313040117825586>roux into you're bank!`)
        }catch(err){
            console.log(err)
        }

        },
    };

    /*const profileModel = require("../models/profileSchema")
    module.exports = {
        name: 'daily',
        aliases: [],
        cooldown: 86400,
        description: 'Beg',
        permissions: ['SEND_MESSAGES'],
        async execute(client, message, args, Discord, profileData) {
            const randomNumber = Math.floor(Math.random() * 5000) + 1;
            const response = await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        roux: randomNumber,
                    },
    
                } //uzoecunXXUUPp7GPw7TcjYHFTMh5zl7qNDb6F0MaOMqBrz81
            
            );
            return message.channel.send(`You have gotten you're daily roux: ${randomNumber}`)
            },
        };
  */
