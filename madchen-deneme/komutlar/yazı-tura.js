const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.RichEmbed()
    .setTitle("Aferin lan kazandıysan ampute.")
    .setColor("RANDOM")
    .setFooter(`buyrun efenim ${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıtura"],
  permLevel: 0
};

exports.help = {
  name: "yazı tura",
  description: "Rastgele yazı tura pngsi atar.",
  usage: "yazıtura"
};
