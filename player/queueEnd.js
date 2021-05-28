const {MessageEmbed} = require("discord.js");

module.exports = (client, message, queue) => {
           const embed1 = new MessageEmbed()
          .setAuthor(` Queue is Empty`,`https://th.bing.com/th/id/OIP.CoxMcjoGrI8UHYIwmNSZxgHaHa?pid=ImgDet&w=900&h=900&rs=1`)

               .setColor('RANDOM')
            return message.channel.send(embed1)
        };
