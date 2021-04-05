
const profileModel = require("../models/profileSchema")

module.exports = {
    name: 'withdraw',
    aliases: ['wd', 'with'],
    cooldown: 4,
    description: 'esadas',
    permissions: ['SEND_MESSAGES'],

    async execute(client, message, args, cmd, Discord, profileData) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Withdraw amount must be a whole number!');
        try{
            if(amount > profileData.bank) return message.channel.send(`You don't dont have amount of roux to withdraw!`)
            await profileModel.findOneAndUpdate({
                userID: message.author.id,
            }, {
                $inc: {
                    roux: amount,
                    bank: -amount,
                },
            }
        );

            return message.channel.send(`${message.author.username}, you have withdrawn ${amount} <:Robux:828313040117825586>roux into you're wallet!`)
        }catch(err){
            console.log(err)
        }

        },
        // const profileModel = require('../models/profileSchema')

// module.exports = {
//     name: 'give',
//     aliases: [],
//     cooldown: 4,
//     description: 'give people coins',
//     permissions: ['SEND_MESSAGES'],
//     async execute(cleint, message, args, cmd, Discord, profileData){

//         if(!args.length) return message.channel.send('You need to mention a user to give them coins!');

        
//         const amount = args[1];

//         if(amount > profileData.roux) return message.channel.send(`You don't dont have amount of roux to give to that person!`)
//         const target = message.mentions.users.first()
//         if(!target) return message.channel.send('That user does not exist!');

//         if (amount % 1 != 0 || amount <= 0) return message.channel.send('To give coins to someone you need to say a whole number!')

//         try {
//             const targetData = await profileModel.findOne({ userID: target.id });
//             if(!targetData) return message.channel.send(`This user does not have a profile`);

//             await profileModel.findOneAndUpdate({
//                 userID: target.id
//             }, {
//                 $inc: {
//                     roux: amount,

//                 },
//             },
//             );

//             return message.channel.send(`You have given ${target.tag} ${amount} roux!`)
//         } catch (err) {
//             console.log(err)
//         }
//     },

// };
    };

    
    
