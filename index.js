const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Server777891.aternos.me', //
        port: 18749, //
        username: 'Bot24Horas', //
        version: '1.21.11' //
    })

    bot.on('login', () => {
        console.log('Bot conectado!')
        // Faz o bot pular a cada 30 segundos para não ser expulso por inatividade
        setInterval(() => {
            bot.setControlState('jump', true)
            setTimeout(() => bot.setControlState('jump', false), 500)
        }, 30000)
    })

    bot.on('error', (err) => console.log('Erro no bot:', err.message))

    bot.on('end', () => {
        console.log('Conexão perdida, tentando novamente em 10 segundos...')
        setTimeout(createBot, 10000)
    })
}

createBot()

const http = require('http');
http.createServer((req, res) => {
    res.write("Bot está online!");
    res.end();
}).listen(8080);
