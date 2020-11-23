const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  let prefix = ayarlar.prefix;

  const moderasyon = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(
      `SLAN YARDIM MENÜSÜ`
    )
    .setDescription(
      `

:hammer_pick: **=**  \`${prefix}sa-as\` : **Sa-As açar kapatır**
:hammer_pick: **=**  \`${prefix}sil\`:  **Mesaj siler**
:hammer_pick: **=**  \`${prefix}silüye\`:  **Belirtilen üyenin mesajını siler**
:hammer_pick: **=**  \`${prefix}slowmode\`:  **yavaş-modu belirler**
:hammer_pick: **=**  \`${prefix}link\`:  **Reklam engel açar kapatır**
:hammer_pick: **=**  \`${prefix}küfür\`:  **Küfür Açar Kapatır**

[[Davet Et]](https://discord.com/api/oauth2/authorize?client_id=772825996394758154&permissions=8&scope=bot)
`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/706125827703570452/775262783544492052/standard.gif"
    );
  message.channel.send(moderasyon);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Bizim yaptığımız bir yardım kodu.",
  usage: "yardım"
};
