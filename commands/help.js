const Discord = require("discord.js")
module.exports = {
    name: 'help',
    aliases: ['commands'],
    cooldown: 2,
    description: 'shows all the commands!',
    permissions: ['SEND_MESSAGES'],
    execute(client, message, args){

        const invite = 'https://discord.com/api/oauth2/authorize?client_id=821509611885821992&permissions=4294967287&scope=bot'
        const newEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('All of the commands!')
        .setDescription(`[Invite the bot here](${invite})`)
        .addFields(
            {name: '😀 Fun', value: '`%help-fun`', inline: true},
            {name: '📷 Images', value: '`%help-images`', inline: true},
             {name: '🔨 Utility', value: '`%help-utility`', inline: true},
             {name: '🚓 Moderation', value: '`%help-mod`', inline: true},
                {name: '🎶 Music', value: '`%help-music`', inline: true},
                {name: '💵 Economy', value: '`%help-economy`', inline: true}
            // 📷
        ) /*
        module.exports = {
    name: 'muterolesetup',
    aliases: ['mrs'],
    description: 'esadasdasd',
    permissions: ['MANAGE_ROLES'],
    async execute(client, message, args, Discord, profileData){
        try {

            let muteRole = await message.guild.roles.create({
                data : {
                    name : 'Muted',
                    permissions: []
                }
            
                
       
    });
    message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
        await channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
    })
});
message.channel.send('Muted role has been sucessfully been created!')
} catch (error) {
    console.log(error)
}
    }

}
*/

        message.channel.send(newEmbed)
    }
}