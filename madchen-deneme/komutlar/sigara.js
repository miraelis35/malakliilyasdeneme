const Discord = require("discord.js");

exports.run = function(client, message) {
  if (message.author.bot || message.channel.type === "dm") return;
  var gifler = [
    "https://thumbs.gfycat.com/TangibleUnconsciousGoldfish-small.gif",
    "https://data.whicdn.com/images/132230550/original.gif",
    "https://media.tenor.com/images/3b5cf1e7b088c6de14204aae148ee514/tenor.gif",
    "https://media.tenor.com/images/98958e055952ed1cb40bc4731138e4da/tenor.gif",
    "https://i.pinimg.com/originals/68/4e/76/684e769b1f1a9b4385399cf66be6f638.gif",
    "http://media1.giphy.com/media/ddUj8UavbMvrG/200.gif",
    "https://66.media.tumblr.com/tumblr_lpv8aleuoL1qixnq9.gif",
    "https://66.media.tumblr.com/d55ba5fdf346d342d4ee687c7e052581/tumblr_n789pv79B11tes0u8o1_400.gif",
    "https://66.media.tumblr.com/369cd6e9095bac33764d1b0a2eb600f4/tumblr_o4m3z6SN2s1tgxn57o1_400.gif",
    "https://galeri13.uludagsozluk.com/650/sigara-icen-kiz_1277791.gif",
    "https://img-s1.onedio.com/id-5b588560dc78bbf94e1e6296/rev-0/raw/s-6d1b73764fb537acf26efcbbc096d984b5ad14fa.gif",
    "https://66.media.tumblr.com/fca9884d1e192cf82244e88ffc275041/tumblr_nplg4yUhH91u6osmfo1_400.gif",
    "https://i.pinimg.com/originals/3a/74/82/3a7482f65622c9958a0023ac96c2c950.gif",
    "http://31.media.tumblr.com/b8d7232971249c96160005c0081c3e10/tumblr_mla65srCT61qc9ap6o1_500.gif",
    "https://media2.giphy.com/media/p8WgUo0SVfzS8/giphy.gif",
    "https://i0.wp.com/78.media.tumblr.com/977aca266d21be23079855895984b4ec/tumblr_inline_oykh6neSxr1vohmas_500.gif",
    "https://66.media.tumblr.com/bf8fbae92b0d37e160c25d1ea009b68a/tumblr_prm4kyypc91xew7zqo1_400.gif",
    "https://media.giphy.com/media/7hZbXa03C55PElqYYM/giphy.gif",
    "https://media.giphy.com/media/ofIShrxQmybYVKwddd/giphy.gif",
    "https://media.giphy.com/media/07Urr0MHn1MBSywZwy/giphy.gif",
    "https://media.giphy.com/media/XuAuUm4FL6Kt1cGsVk/giphy.gif",
    "https://media.giphy.com/media/w87lOQ2inzQm94o87r/giphy.gif",
    "https://media.giphy.com/media/fJUKF1WDNOJDq4ddL8/giphy.gif",
    "https://media.giphy.com/media/Xi5BZBXHDmOe0G5XYM/giphy.gif",
    "https://media.giphy.com/media/AhguAYyv6xgf6JDsRU/giphy.gif",
  ];
  var gif = gifler[Math.floor(Math.random() * gifler.length)];

  const embed = new Discord.RichEmbed()
    .setColor("#32ffe6")
    .setDescription("**Smoke**")
    .setImage(`${gif}`);
  message.channel.send(embed);
  message.react("🚭");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["smoke", "yaktım"],
  permLevel: 0
};

exports.help = {
  name: "sigara",
  description: "Sigara içmek belki sürpriz olabilir :)",
  usage: "sigara"
};
