const db = require("quick.db")

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    db.set(`emoji_${message.guild.id}`, 'kapali')
    return message.channel.send('`Haha` atma başarıyla de-aktif hale geldi.')

};

exports.conf = {
aliases: ["haha-kapat", "close"]
}
exports.help = {
name: 'kapat'
}