const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.removeRole('762725285921292318') //-- alınacak rol
  member.addRole('782038893981204510')   //-- verilcek rol
const embed = new Discord.RichEmbed()


      .addField(`**🏷 Bot Kayıt 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.get('762715997056008291').send(embed) //-- kanal ıd
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıt-teyit"],
  permLevel: 2
};
exports.help = {
  name: "kayıtteyit",
  description: "ArveLoS Bot Kayıt Sistemi",
  usage: "ArveLoS Bot Kayıt Sistemi"
};