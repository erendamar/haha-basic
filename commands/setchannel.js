const db = require("quick.db")

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
    if (message.mentions.channels.first() == undefined) {
        if (args[0] != undefined && args[0] == 'hepsi') {
            db.set(`chnl_${message.guild.id}`, 'all')
            return message.channel.send('Artık tüm kanallarda haha atacağım.')
        } else {
            return message.channel.send('Lütfen komutu doğru bir şekilde kullanın.')
        }
    } else {
        db.set(`chnl_${message.guild.id}`, message.mentions.channels.first().id)
        return message.channel.send(`Artık sadece ${message.mentions.channels.first()} kanalında haha atacağım.`)
    }


};

exports.conf = {
aliases: ["kanaldeğiştir", "channel"]
}
exports.help = {
name: 'kanal'
}