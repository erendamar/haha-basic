const db = require("quick.db")

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    db.delete(`emoji_${message.guild.id}`)
    db.delete(`chnl_${message.guild.id}`)
    return message.channel.send('Sunucu ile ilgili `tüm veriler` başarıyla silindi.')

};

exports.conf = {
aliases: ["delete"]
}
exports.help = {
name: 'sil'
}