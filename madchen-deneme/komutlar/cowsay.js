const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazini Yaz');
  message.channel.sendCode("asciidoc", `
  < ${mesaj} >
  --------------------------
───▄▄▄▄▄▄─────▄▄▄▄▄▄
─▄█▓▓▓▓▓▓█▄─▄█▓▓▓▓▓▓█▄
▐█▓▓▒▒▒▒▒▓▓█▓▓▒▒▒▒▒▓▓█▌
█▓▓▒▒░╔╗╔═╦═╦═╦═╗░▒▒▓▓█
█▓▓▒▒░║╠╣╬╠╗║╔╣╩╣░▒▒▓▓█
▐█▓▓▒▒╚═╩═╝╚═╝╚═╝▒▒▓▓█▌
─▀█▓▓▒▒░░░░░░░░░▒▒▓▓█▀
───▀█▓▓▒▒░░░░░▒▒▓▓█▀
─────▀█▓▓▒▒░▒▒▓▓█▀
──────▀█▓▓▒▓▓█▀
────────▀█▓█▀
──────────▀

LOVE`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cowsay'],
  permLevel: 1
};

exports.help = {
  name: 'inek',
  description: 'inek',
  usage: 'inek'
};