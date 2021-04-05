const ytdl = require('ytdl-core')
const ytSearch = require('yt-search')
const Discord = require('discord.js')
const queue = new Map();
module.exports = {
    name: 'play',
    aliases: ['pl'],
    cooldown: 2,
    description: 'Plays music!',
    permissions: ['CONNECT'],
   async execute(client, message, args){  

    const voice_channel = message.member.voice.channel;
    if(!voice_channel) return message.channel.send('You need to be a voice channel to play music!')

    const server_queue = queue.get(message.guild.id);
    
  
    
        if(!args.length) return message.channel.send('Please type the music that you want to play!')
        let song = {};
        console.log(song)

        if(ytdl.validateURL(args[0])) {
    const song_info = await ytdl.getInfo(args[0])
    song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
        
 
} else {
    const video_finder = async (query) =>{
        const videoResult = await ytSearch(query) 
        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
    }

    const video = await video_finder(args.join(' '))
    

    if(video){
        song = { title: video.title, url: video.url }
    } else {
        message.channel.send('I cannot find that video!')
    }
    }
        if(!server_queue){

        const queue_constructor = {
            voice_channel: voice_channel,
            text_channel: message.channel,
            connection: null,
            songs: []
        }

        queue.set(message.guild.id, queue_constructor);
        queue_constructor.songs.push(song)

        try {
            const connection = await voice_channel.join();
            queue_constructor.connection = connection;
            video_player(message.guild, queue_constructor.songs[0]);
        } catch (err) {
            queue.delete(message.guild.id)
            
            message.channel.send('There was a error connecting to the voice channel!')
            throw err;
        }
    } else {
        server_queue.songs.push(song)
        const queueEmbed = new Discord.MessageEmbed()
        .setTitle('Added to queue!')
        .setDescription(`🎉 **${song.title}** Has been added to the queue!`)
        return message.channel.send(queueEmbed)

    }

}


   

}


const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id)

    if(!song) {
        song_queue.voice_channel.leave()
        queue.delete(guild.id)
        return;
    }

    const stream = ytdl(song.url, { filter: 'audioonly'});
    song_queue.connection.play(stream, { seek: 0, volume: 1 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    const songEmbed = new Discord.MessageEmbed()
    .setTitle('Music Playing!')
    .setDescription(`🎉🎶 Now playing **${song.title}**`)
    await song_queue.text_channel.send(songEmbed)
}




        /*const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be a voice channel to play music!')
        if(!args.length) return message.channel.send('Please type the music that you want to play!')



        const connection = await voiceChannel.join()

        const videoFinder = async (query) => {;
        const videoResult = await ytSearch(query);

        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '))

        if(video){

            const stream = ytdl(video.url, {filter: 'audioonly'})
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () => {
                voiceChannel.leave()
            });

            const newEmbed = new Discord.MessageEmbed()
            .setTitle('Music Playing!')
            .setDescription(`🎉Now playing **${video.title}**`)

            message.channel.send(newEmbed)

        } else {
            message.channel.send('No video results found!')
        

        
        }
    }
}*/