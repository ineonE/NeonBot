const profileModel = require("../models/profileSchema")
module.exports = {
    name: 'beg',
    aliases: ['plsroux'],
    cooldown: 30,
    description: 'Beg',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord, profileData) {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
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
        return message.channel.send(`${message.author.username}, you begged and recived ${randomNumber} <:Robux:828313040117825586>roux!`)
        },
    };
  