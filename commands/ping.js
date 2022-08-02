exports.run = async(client, message, args) => {

    message.channel.send(`Pong! 🏓 ${client.ws.ping}ms`)

};

exports.conf = {
aliases: []
}
exports.help = {
name: 'ping'
}