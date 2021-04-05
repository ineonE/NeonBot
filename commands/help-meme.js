const Discord = require("discord.js")
module.exports = {
    name: 'help-meme',
    aliases: ['help-funny'],
    cooldown: 2,
    description: 'ahgjgkjgjgjgkjd',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Command: `%meme`')
        .addFields(
            {name: 'Usage:', value: '`%meme`'},
            {name: 'Category:', value: 'Images'},
            {name: 'Description:', value: 'Shows memes!'}
            )
            message.channel.send(newEmbed)



        }
    }

    // const profileModel = require("../models/profileSchema")
/*module.exports = {
    name: 'daily',
    aliases: [],
    cooldown: 86400,
    description: 'Beg',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, Discord, profileData) {
        const randomNumber = Math.floor(Math.random() * 10000) + 1;
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
        return message.channel.send(`You have claimed you're daily amount of roux: ${randomNumber}!`)
        },
    };*/
  