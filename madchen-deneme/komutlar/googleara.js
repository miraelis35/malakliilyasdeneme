const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

 let google = args.slice(0).join('+');
let link = `https://www.google.com/search?q=` + google;
if(!link)return message.reply("Hata !")
if(!google) return message.reply("**Lütfen Ne Aratacağımı Yaz**")
let embed = new Discord.RichEmbed()
 
    .setColor("RED")
    .setTimestamp()
    
 .addField("Kelime:", `${args.slice(0).join(' ')}`)
 .addField('Link:', `${link}`)
.setFooter('ArveLoS Google Arama Sistemi') 
          
 message.channel.send(embed);

  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['googledeara'],
  permLevel: 0
};

exports.help = {
  name: 'googlearama',
  description: 'Googlede Arama yapar.',
  usage: 'googlearama'
};