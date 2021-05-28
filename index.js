const discord = require('discord.js');
const fs = require('fs');
const keepAlive = require("./server")
const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./bot');


client.commands = new discord.Collection();

fs.readdirSync('./src').forEach(dirs => {
    const commands = fs.readdirSync(`./src/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./src/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
keepAlive()
client.login(client.config.discord.token);
