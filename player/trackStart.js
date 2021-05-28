const {MessageEmbed} = require("discord.js");

module.exports = (client, message, track) => {
           const embed = new MessageEmbed()
          .setAuthor(` | Now Playing`,`https://th.bing.com/th/id/R769109050d360c743deef7977cf51185?rik=TnxLPi%2bjaCAymg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fncE%2fBRG%2fncEBRGpLi.png&ehk=vDHmz7REt9el2ux1lOxcXcW9coIr%2bXrsZqMxnS1XiMs%3d&risl=&pid=ImgRaw`)
          .setThumbnail(`${track.thumbnail}`)
          .setDescription(`[${track.title}](${track.url})`)
          .addField(`Requested By :` , `<@${message.member.id}>` , true)
          .addField(`Channel : ` , `<#${message.member.voice.channel.id}>`,true )
               .setColor('RANDOM')
            return message.channel.send(embed)
        };

  
      
