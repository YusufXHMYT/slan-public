const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);

if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`:slancross: Yanlış Kullanım!`, `Bir rakam yazmalısın!`)
    .addField(`:slantik: Doğru Kullanım:`, `${ayarlar.prefix}sil <temizlenecek mesaj sayısı>`)
return message.channel.send(errembed);
}

if (args[0] < 1) return message.reply(":slancross: **1** adetten az mesaj silemem!")
if (args[0] > 100) return message.reply(":slancross: **100** adetten fazla mesaj silemem!")

message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply(":slancross: Hiç mesaj silemedim! _(**14** günden önceki mesajları silemem!)_");
})
message.channel.send(`:slantik: **${args[0]}** adet mesaj başarıyla silindi!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sil", "mesaj-sil", "mesajları-sil","del","temizle"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sil',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '.sil <miktar>'
};
