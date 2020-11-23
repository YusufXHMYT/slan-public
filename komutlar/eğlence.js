const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  let prefix = ayarlar.prefix;

  const yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(
      `SLAN EĞLENCE MENÜSÜ`
    )
    .setDescription(
      `

:hammer_pick: **=**  \`s!1v1\` : **1v1 atarsınız**
:hammer_pick: **=**  \`s!söv\`:  **Birine Ağır Söversiniz**
:hammer_pick: **=**  \`s!kaçcm\`:  **Kaç cm :D**
:hammer_pick: **=**  \`s!kasaaç\`:  **CSGO kasası açarsınız**
:hammer_pick: **=**  \`s!kapaklaflar\`:  **KAPAKLAF ÇAKAR**

[[Davet Et]](https://discord.com/api/oauth2/authorize?client_id=772825996394758154&permissions=8&scope=bot)
`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/706125827703570452/775621709482033152/standard_1.gif"
    );
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence","fun"],
  permLevel: 0
};

exports.help = {
  name: "fun",
  description: "Bizim yaptığımız bir yardım kodu.",
  usage: "fun"
};
