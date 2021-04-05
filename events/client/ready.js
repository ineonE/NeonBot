const path = require('path')
    module.exports = async (Discord, client, guild) => {
    console.log('Bot.. is online!')

        const clientDetails = {
            guilds: client.guilds.cache.size,
            users: client.users.cache.size,
            channels: client.channels.cache.size
        }
 
  


        const arrayOfStatus = [
            '%help', 
            'the world',
            'nothing', 
            'You', 
            'myself', 
            `${client.guilds.cache.size} Servers!`,
            `${client.users.cache.size} Users!`,
            'no',
            '@everyone',
            'some people',
            'Neon',
            '%invite'
        ];
    
        let index = 0;
        setInterval(() => {
    
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status);
        client.user.setActivity(status, { type: 'WATCHING'});
        
        index++;
        }, 10000)
    
    
    
        // express
        const express = require('express');

        const app = express();

        const port = 3000 || 3001;
        app.get("/", (req, res) => {
            res.status(200).sendFile(path.join(__dirname, "../../", "website", "index.html"))
        })

        app.get("/info", (req, res) => {
            res.status(200).send(clientDetails)
        })

        app.listen(port)
    
    
    }
    
   
