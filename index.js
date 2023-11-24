const venom = require('venom-bot');

const sessionName = 'Assistente Corleone';

venom
    .create({
        session: sessionName
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });
    
const conversationState = {};

function start(client) {
    client.onMessage(async (message) => {
        async function sendMenu() {
            const menuMessage = '1 - Sobre a nossa empresa \n2 - Contato \n3 - SAC para dúvidas / reclações \n4 - Encerrar Atendimento 🛑';
            await client.sendText(message.from, menuMessage);
        }

        async function sendAtracoes() {
            const andarMessage = 'A - Pátio\nB - 1° Andar\nC - 2° Andar\nD - 3° Andar\nE - Outros';
            await client.sendText(message.from, andarMessage);
        }

        if (message.body === `Olá, tenho interesse na Don Corleone's Pizza` && message.isGroupMsg === false) {
            await client.sendText(message.from,
                'Olá! 😊 Bem-vindo ao Assistente Virtual do Don Corleone Pizza! Para melhor atendê-lo, escolha uma das categorias abaixo que corresponda ao assunto que deseja abordar:');
            await sendMenu();
        } else if (message.body === '1' && message.isGroupMsg === false) {
            await client.sendText(message.from, "🇮🇹🍕 Descubra a Essência da Itália no Coração do Brasil! 🇧🇷🍕")
            await client.sendText(message.from, "Somos uma empresa que nasceu do desejo de compartilhar a riqueza da cultura italiana com o Brasil. Cada pizza que sai de nossa cozinha é uma homenagem à tradição, ao amor pela comida e à convivialidade italiana. Valorizamos a qualidade dos ingredientes e a autenticidade dos sabores, para que você possa se transportar diretamente para as encantadoras ruas de Roma, Nápoles ou Florença.")
            await client.sendText(message.from, "📞 Faça seu pedido agora e desfrute da autêntica experiência italiana no conforto da sua casa. Buon appetito! 🍕🍷")
            await sendMenu()
        } else if (message.body === '2' && message.isGroupMsg === false) {
            await client.sendText(message.from, "📞 Contato: Don Corleone Pizzaria \n\n🛣 Av. Giovanni Gronchi Vila Andrade, 74 – Pinheiro – São Paulo \n\nsecretaria@acaonsfatima.org.br \nacaonsfatima.org.br \n\n(11) 5939-5460 \n(11) 99367-3706  \n\nhttps://maps.google.com/?q=Av+Giovanni+Gronchi+Vila+Andrade,74 ")
            await sendMenu()
        } else if (message.body === '3' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Ops, aconteceu um erro no meu sistema. 🤖 \n\nLamentamos o ocorido, favor entrar em contato conosco.")
            await sendMenu()
        } else if (message.body === '4' && message.isGroupMsg === false) {
            await client.sendText(message.from, "Esperamos que as informações tenham sido úteis! 😊\n\nCaso tenha mais alguma dúvida ou precise de informações adicionais, entre em contato conosco.");
        }
    });
}
