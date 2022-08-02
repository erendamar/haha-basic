exports.run = async(client, message, args) => {

    message.channel.send("*Botu davet etmek için gereken bağlantıyı özelden atıyorum...* 📫")
    message.author.send(`
👇🏽 Aşağıda bırakmış olduğum bağlantıya tıklarsanız; Beni sunucunuza davet edebilirsiniz.
*https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8*
`).catch(err => message.channel.send("*Özel mesajlara izin ver sana mesaj atamıyorum.*"))

};

exports.conf = {
aliases: ["invite"]
}
exports.help = {
name: 'davet'
}