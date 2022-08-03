const Discord = require("discord.js")
const settings = require('../settings.json');
var prefix = settings.prefix;

exports.run = async(client, message, args) => {

    const s = new Discord.MessageEmbed()
    .setColor("#ffcc33")
    .setTitle(`haha bot komutlar`)
    .addField("yardım", "Komutları gösterir.")
    .addField("ping", "Bot'un pingini gösterir.")
    .addField("davet", "Botun davet bağlantısını atar.")
    .addField("destek", "Botun destek sunucusunun davetini atar.")
    .addField("haha-aç, hahaaç, aç", `Oto-haha atmayı açar. Dilerseniz \`${prefix}aç <#kanal>\` şeklinde kullanarak tek bir kanalda aktif edebilirsiniz.`)
    .addField("haha-kapat, hahakapat, kapat", "Oto-haha atmayı kapatır.")
    .addField("sil", "Sunucu ile ilgili tüm verileri siler. *(Sunucuyu Yönet yetkisi ister)*")
    .setThumbnail(client.user.avatarURL())
    .setFooter("Bu bot ücretsiz ve açık kaynak kodludur. https://github.com/erenvein/haha-bot-basic")
    message.channel.send(s)

};

exports.conf = {
aliases: ["help", "yardim"]
}
exports.help = {
name: 'yardım'
}