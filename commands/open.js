const db = require("quick.db")

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    db.set(`emoji_${message.guild.id}`, 'acik')
    if (message.mentions.channels.first() == undefined) {
        db.set(`chnl_${message.guild.id}`, 'all')
        db.set(`emoji_${message.guild.id}`, 'acik')
        return message.channel.send('`Haha` atma tüm kanallarda aktif.')
    } else {
        db.set(`chnl_${message.guild.id}`, message.mentions.channels.first().id)
        db.set(`emoji_${message.guild.id}`, 'acik')
        return message.channel.send(`Artık sadece ${message.mentions.channels.first()} kanalında \`haha\` atacağım.`)
    }

};

exports.conf = {
aliases: ["haha-aç", "open"]
}
exports.help = {
name: 'aç'
}