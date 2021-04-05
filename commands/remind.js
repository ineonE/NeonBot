const Discord = require('discord.js')
const ms = require('ms')
module.exports = {
    name: 'remind',
    aliases: [],
    cooldown: 2,
    description: 'ojfgodjgofdjogdf',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args){
       
        let time = args[0]

        if(!time) {
            return message.channel.send('Please tell me how long you want to wait before i remind you!')
        }

     

        const reminder = args.join(" ").slice(args[0].length)

        if (reminder) {
         
            if(!args[1]) {
                return message.channel.send('Please provide a reminder, example: %remind 1s hello world!')
            }

             message.channel.send(`You have set a reminder! i will ping/remind you in ${time}`)

            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Reminder')
            .setColor('RANDOM')
            .setDescription(`Reminder: ${reminder}!`)
            .setTimestamp()


            setTimeout(function () {
             

                message.channel.send(`<@${message.author.id}>`, newEmbed)
                }, ms(time));
            } else {
                return message.channel.send('Please provide a reminder,  example: %remind 1s hello world!')
            

            }
            
        }
    }


