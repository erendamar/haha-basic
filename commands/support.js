const settings = require("../settings.json")

exports.run = async(client, message, args) => {

    message.channel.send("*Botun destek sunucunun davet bağlantısını özelden atıyorum...* 📫")
    message.author.send(`
👇🏽 Aşağıda bırakmış olduğum bağlantıya tıklarsanız; Destek sunucuma girebilirsiniz.
${settings.support_server ? settings.support_server : "*Davet bağlantısı ayarlanmamış...*"}
`).catch(err => message.channel.send("*Özel mesajlara izin ver sana mesaj atamıyorum.*"))

};

exports.conf = {
aliases: ["support", "link"]
}
exports.help = {
name: 'destek'
}