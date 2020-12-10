const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Eğlence Komutları")
    .setDescription("")
    .setColor("#d7342a")
    .addField(
      "**Avatar Görme**",
      `+avatar @etiket, kişinin profilini gösterir`,
      true
    )
    .addField(
      "**Hava Durumu**",
      `+havadurumu "konum", hava durumunu gösterir.`,
      true
    )
    .addField("**Slot Oyunu**", `+slots, slot oyunu.`, true)
    .addField(
      "**Aşk Ölçer**",
      `+aşkölçer @etiket, aşk seviyenizi gösterir.`,
      true
    )
    .addField("**Öpme**", `+öp @etiket, seçtiğiniz kişiyi öper.`, true)
    .addField("**Sigara**", `+yak, sigara yakar.`, true)
    .addField("**Cs:Go Kasa**", `+csgokasa, cs:go kasası açar.`, true)
    .addField("**Yazı Tura**", `+yazıtura, yazı tura atar.`, true)
    .addField(
      "**1v1 Düello**",
      `+1v1 @etiket, birisi ile düello yaparsınız.`,
      true
    )
    .addField("**Kedi Gifleri**", `+kedi, rastgele kedi gifi atar.`, true)
    .addField(
      "**Nah Çekme**",
      `+nahçek @etiket, seçtiğiniz kişiye nah çeker.`,
      true
    )
      .addField("**Espri Yapar**", `+espri, rastgele espri yapar.`, true)
    .addField(
      "**Çeviri Yapar**",
      `+çeviri (yazı), yazdığınız şeyin dilini çevirir.`,
      true
    )
      .addField(
      "**Hesaplama Yapar**",
      `+hesapla (işlem), yazdığınız işlemi cevaplar.`,
      true
    )
      .addField(
      "**İlginç Bilgiler**",
      `+ilgincbilgi, rastgele ilginç bilgiler gönderir.`,
      true
    )
        .addField(
      "**Youtube Arama**",
      `+youtubedeara (video), arattığınız videonun linkini gönderir.`,
      true
    )
         .addField(
      "**Google Arama**",
      `+googledeara (aranacak şey), arattığınız şeyin linkini gönderir.`,
      true
    )
           .addField(
      "**Fbi Basar**",
      `+fbi, fbi odanızı basan bir video gönderir.`,
      true
    )
    .setFooter("ArveLoS Bot");
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardım eğlence",
  description: "Eğlence komutları gösterir.",
  usage: "yardım eğlence [komut]"
};
