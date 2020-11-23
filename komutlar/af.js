const Discord = require("discord.js");
exports.run = async function(client, message, args) {

if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**\`Üyeleri Yasakla\`** İznine Sahip Olman Gerek.`)
  let yasak = await message.guild.fetchBans();
  yasak = yasak.array();
  yasak.forEach(function(ban) {
    message.guild.unban(ban.id);

        message.channel.send(`${yasak} Adlı Tüm Kullanıcıların Yasağı Kalktı!`);

  });


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban-all'],
  permLevel: 2
};

exports.help = {
  name: 'af',
  description: 'banlıların yasaklarını kaldırır',
  usage: 'unbanall'
};
