module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(` You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(` You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing !`);

        const track = client.player.nowPlaying(message);


        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'MSV' },
                fields: [
                  
                    { name: 'Currently At', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};
