const profileModel = require('../../models/profileSchema');

module.exports = async (Discord, client, member, guild) => {
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        roux: 0,
        bank: 0,

    });
    profile.save()
} 

