const { MessageEmbed } = require('discord.js')
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: 'statistics',
    aliases: ['stats'],
    category: 'Bot',
    utilisation: '{prefix}skip',

execute(client, message) {
let days = Math.floor(client.uptime / 86400000);
let hours = Math.floor(client.uptime / 3600000) % 24;
let minutes = Math.floor(client.uptime / 60000) % 60;
let seconds = Math.floor(client.uptime / 1000) % 60;
const duration = moment.duration(client.uptime).format(' D [Day(s)], H [Hour(s)], M [Minute(s)], S [Second(s)]');
const embed = new MessageEmbed()
.setTitle(client.user.username)
.setThumbnail(client.user.displayAvatarURL())
.setColor("RANDOM")
.addField('Stats', [
    `• Servers: ${client.guilds.cache.size}`,
    `• Creator: Glitch#1596(https://top.gg/user/5077016633088344064)`,
    `• ID: ${client.user.id}`,
    `• Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`,
    `• Channels: ${client.channels.cache.size}`,
    `• Status: ${client.user.presence.status}`,
    `• Ping: ${Math.round(client.ws.ping)}ms`,
]);

message.channel.send(embed);
 },
};