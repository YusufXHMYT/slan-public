const Discord = require('discord.js')
const ms = require("ms");

exports.run = async (client, message, args) => {
const mb = new Discord.MessageEmbed()
.setColor('f5f5f5')

const emb = new Discord.MessageEmbed()
.setColor('f5f5f5')
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(mb.setDescripton(`<a:uyar2:744307946782982187>  Bu komutu kullanabilmek için yetkiniz yetersiz.`))
let codearius = message.mentions.channels.first()
let kanal = message.guild.channels.get(codearius.id);
let role = message.guild.roles.find(c => c.name === '@everyone');

kanal.overwritePermissions(role, { 'SEND_MESSAGES': null })
kanal.send(emb.setDescription(`Kanalın kiliti açıldı iyi eğlenceler!`)).then(m => {

})

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kilitaç'
};
