module.exports = {
    name: 'purge',
    aliases: [],
    cooldown: 2,
    description: "Deletes messages!",
    permissions: ["MANAGE_MESSAGES"],
    async execute(client, message, args, cmd, Discord) {


        if(!args[0]) return message.reply("Please enter the amount of messages that you want to purge!");
        if(isNaN(args[0])) return message.reply("Please enter a number! (1-50) ");

        if(args[0] > 100) return message.reply("You cannot delete more then 100 messages!");
        if(args[0] < 1) return message.reply("You must delete atleast one message!");
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
            /*
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);*/
    }
}   