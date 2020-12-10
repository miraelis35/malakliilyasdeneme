const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(' » İstatistik :')
    .addField(':timer: Gecikme: ', client.ping + ' ms')
     
    .addField(':construction_worker: Çalışma Süresi: ', `${duration}`)
    
    
   
    .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(':book: Kütüphanesi;', `Discord.js`)
    .addField(`:diamonds: Discord.js sürümü:`, Discord.version)
      .addField(':spy: Yapımcım:', ' » <@595788442953187329> | `ArveLoS#2020` ')
      .addField(':paperclip: Botun Başlanma Zamanı:', "Bot **12.11.2020**'de yapılmaya başlanmıştır")
    .setFooter('ArveLoS Bot', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi', 'botdurum'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'duyuru [duyuru]'
};