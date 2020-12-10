const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = [
    "https://i.gifer.com/Wyvt.gif",
    "https://i.pinimg.com/originals/b4/43/fd/b443fd37ac3edb4820e9fc759df3f5fa.gif",
    "https://media2.giphy.com/media/UBxjJL9qz6sBq/source.gif",
    "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/dIVa0pwco4Mj5rQ7gy/giphy.gif",
    "https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif",
    "https://cdn.discordapp.com/attachments/553909813675950092/555124011382865951/tenor.gif",
    "https://cdn.discordapp.com/attachments/553909813675950092/555124026608058371/dsadasdasd.gif"
  ];

  let result = Math.floor(Math.random() * replies.length);

  let gifembed = new Discord.RichEmbed()
    .setTitle("Kediniz;")
    .setColor("#FF69B4")
    .setFooter(`Kedin ${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kedi", "cat"],
  permLevel: 0
};

exports.help = {
  name: "kedi",
  description: "Rastgele kedi gif atar.",
  usage: "gif"
};
