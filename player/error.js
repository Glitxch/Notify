module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`There is no music played on this server !`);
            break;
        case 'NotConnected':
            message.channel.send(`You are not connected in any voice channel!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`I am not able to join your voice channel, please check my permissions!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${args[0].title} is not available in your country!`);
            break;
        case 'MusicStarting':
            message.channel.send(`The music is starting... please wait and retry!`);
            break;
        default:
            message.channel.send(` Something went wrong`);
    };
};
