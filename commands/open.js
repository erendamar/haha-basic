const db = require("quick.db")

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    db.set(`emoji_${message.guild.id}`, 'acik')
    return message.channel.send('`Haha` atma başarıyla aktif hale geldi.')

};

exports.conf = {
aliases: ["haha-aç", "open"]
}
exports.help = {
name: 'aç'
}