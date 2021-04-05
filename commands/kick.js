const kick = require('discord.js')
module.exports = {
    name: 'kick',
    aliases: ['k'],
    cooldown: 2,
    description: 'kick',
    permissions: ['KICK_MEMBERS'],
   async execute(client, message, args, profileData) {

        let reason = args.slice(1).join(" ");
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!reason) reason = 'No reason given';
        if (!args[0]) return message.channel.send('Please mention someone to kick!');
        if (!mentionedMember) return message.channel.send('The member mentioned is not in the server!');
        if (!mentionedMember.kickable) return message.channel.send ('I cannot kick that member!');

    
     


        await mentionedMember.send(`**You have been kicked from ${message.guild.name}**, Reason: ${reason}`).catch(err => console.log(err));
        await mentionedMember.kick
    

    message.channel.send(`<@${mentionedMember.user.id}> has been kicked, ID: \`${mentionedMember.user.id}\`!`)
   
  
        }
    }


