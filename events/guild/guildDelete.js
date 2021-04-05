const mongoose = require('mongoose')
const guild = require('../../models/guild')

module.exports = async (client, guild) => {
  guild.findOneAndDelete({
      guildID: guild.id
  }, (err, res) => {
    if(err) console.error(err)
    console.log("I have been removed from a server :(")
  });
};