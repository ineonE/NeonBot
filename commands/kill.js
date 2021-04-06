module.exports = {
    name: 'kill',
    aliases: [],
    cooldown: 3,
    description: 'ee',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){

      

        
        if(!args[0]) return message.channel.send('Who do you want to kill?')


        const user = message.mentions.users.first()

        if(!user) return message.channel.send('Please mention someone to kill!')
        const response = [
            `${user.username}, has died in a fire.`, `${user.username}, has died for being to cool.`, `${user.username}, got shot and died.`, `${user.username}, tripped over his/her shoe laces then died.`, `${user.username}, has died for no reason.`, `${user.username}, has died because he tripped on a rock.`, `${user.username}, has died because he was not a epic gamer.`, `${user.username}, died because he watched a scary movie then died because of a heart attack.`
        ]
        const a = response[Math.floor(Math.random() * response.length)]

        if(user) return message.channel.send(`${a}`)
    


    }
}