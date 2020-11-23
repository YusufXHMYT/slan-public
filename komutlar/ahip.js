const Discord = require("discord.js");

module.exports.run = async (client, message) => {

  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
     .setTitle('SLAN BOT YAPIMCI')
    .setDescription(`BENİM GELİŞTİRİCİMİN ADI <@495488024759631882>`)
    .setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
    aliases: ["sahip"],
  permLevel: 0,
  kategori: "gelistirici"
};

module.exports.help = {
  name: "sahip",
  description: "gelistiricinin adını gösterir",
  usage: "sahip"
};
