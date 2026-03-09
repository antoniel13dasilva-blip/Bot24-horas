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


const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot Online!');
});

app.listen(port, () => {
  console.log(`Servidor HTTP rodando na porta ${port}`);
});

const axios = require('axios');

setInterval(() => {
  axios.get('https://bot24-horas-aternos.onrender.com')
    .then(() => console.log('Auto-ping realizado com sucesso'))
    .catch(err => console.error('Erro no auto-ping:', err.message));
}, 600000); // 10 minutos
