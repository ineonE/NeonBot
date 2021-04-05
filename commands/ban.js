
module.exports = {
    name: 'ban',
    aliases: ['b'],
    cooldown: 1,
    description: 'ban',
    permissions: ['BAN_MEMBERS'],
   async execute(client, message, args, Discord, profileData) {

        let reason = args.slice(1).join(" ");
        const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!reason) reason = 'No reason given';
        if (!args[0]) return message.channel.send('Please mention someone to ban!');
        if (!mentionedMember) return message.channel.send('The member mentioned is not in the server!');
        if (!mentionedMember.bannable) return message.channel.send ('I cannot ban that member!');

    
     


        await mentionedMember.send(`**You have been banned from ${message.guild.name}**, Reason: ${reason}`).catch(err => console.log(err));
        await mentionedMember.ban({
            days: 7,
            reason: reason
        }).catch(err => console.log(err))

    message.channel.send(`<@${mentionedMember.user.id}> has been banned, ID: \`${mentionedMember.user.id}\`!`)
   
  
        }
    }


