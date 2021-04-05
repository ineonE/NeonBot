
const Discord = require('discord.js');
const mongoose = require('mongoose')
require('dotenv').config();
const prefix = process.env.PREFIX
const client = new Discord.Client();


const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
});

mongoose.connect(process.env.MONGOPATH_SRV,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected to mongodb!')
}).catch((err) => {
    console.log(err)
})


client.on('message', async message => {


if (message.mentions.size < 1 || !message.guild || message.author.bot) return;
      const db = require('./models/afkSchema')
      const user = message.mentions.users.first()
      if (!user) return
      await db.findOne({ guildId: message.guild.id, userId: user.id}, async (err, res) => {
          if (err || !res) return
          if (res) {
              message.delete()
              return message.reply(`Hey! ${user.username} is marked as AFK!`)
           
         

    


            }
        })
})


client.login(process.env.DISCORD_TOKEN)
      

