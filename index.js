const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Server777891.aternos.me',
        port: 18749, 
        username: 'Bot24Horas',
        version: '1.21.11'
    })

    bot.on('login', () => console.log('Bot conectado!'))

    bot.on('end', () => {
        console.log('Conexão perdida, tentando novamente...')
        setTimeout(createBot, 5000)
    })
}

createBot()

