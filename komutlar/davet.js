const  Discord = require("discord.js");

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle")
  .setDescription("[Davet Et](https://discord.com/api/oauth2/authorize?client_id=772825996394758154&permissions=8&scope=bot) \n [Destek Sunucusu](https://discord.gg/cM6jcayHZ2)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};
