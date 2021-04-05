const api = require('covidapi')
module.exports = {
    name: 'covidstats',
    aliases: ['covid'],
    cooldown: 5,
    description: 'e',
    permissions: ['SEND_MESSAGES'],
    async execute(client, message, args, cmd, Discord, profileData){

        const data = await api.all()
        const advice = 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
        const newEmbed = new Discord.MessageEmbed()
        
        .setColor('RANDOM')
        .setTitle('Covid-19 Stats (global)')
        .setDescription(`[Click here for advice for covid-19](${advice})`)
        .addFields(
            {name: 'Cases', value: `${data.cases}`, inline: true},
            {name: 'todayCases', value: `${data.todayCases}`, inline: true},
            {name: 'Deaths', value: `${data.deaths}`, inline: true},
                      {name: 'todayDeaths', value: `${data.todayDeaths}`, inline: true},
            {name: "Recovered", value: `${data.recovered}`, inline: true},
            {name: 'todayRecovered', value: `${data.todayRecovered}`, inline: true},
    

          
        )
       
        //    .setDescription(`[avatar URL](${user.avatarURL()})`)
        
        message.channel.send(newEmbed)
        console.log(newEmbed)
    }
}