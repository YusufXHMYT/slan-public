const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = function(client, message) {
  let prefix = ayarlar.prefix;

  const yardım = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(
      `SLAN YARDIM MENÜSÜ`
    )
    .setDescription(
      `

:hammer_pick: **=**  \`${prefix}profil\` : **Profil Bilgilerinizi Gösterir (Telefon ve E-Posta Adresi Göstermez)**
:hammer_pick: **=**  \`${prefix}yetkilerim\`:  **Sunucudaki Yetkilerinizi Gösterir**
:hammer_pick: **=** \`${prefix}id\`: **Profil ID nizi verir**
[[Davet Et]](https://discord.com/api/oauth2/authorize?client_id=772825996394758154&permissions=8&scope=bot)
`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/706125827703570452/775262783544492052/standard.gif"
    );
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı","user"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Bizim yaptığımız bir yardım kodu.",
  usage: "yardım"
};
