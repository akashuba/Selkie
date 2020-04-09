const Bot = require('node-telegram-bot-api');

const api = require('./api');
const passwordGenerator = require('./passwordGenerator');

const token = process.env.TOKEN;
let bot;

if (process.env.NODE_ENV === 'production') {
    bot = new Bot(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
    bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.on('message', async (msg) => {
	const name = msg.from.first_name;
	const messageText = msg.text.toLowerCase();

	if (messageText.indexOf('password') !== -1) {
		bot.sendMessage(msg.chat.id, passwordGenerator.getPassword(8));
	}

	else if (messageText.indexOf('help') !== -1) {
		bot.sendMessage(msg.chat.id, "Now I can answer on:\n password \n skill <checked skill in hh.ru> \n or just greet you =)")
	}

	else if (messageText.indexOf('skill') !== -1) {
		const skill = messageText.split(' ').slice(1);
		try {
			await api.hh.getVacancies(skill);
	
			const vacancies = JSON.parse(api.hh.vacancies);
			bot.sendMessage(msg.chat.id, `${skill} - has ${vacancies.found} vacancies on hh.ru`)
		} catch (error) {
			console.log(error);
		}
	}

	else {
		bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!').then(() => {
			// reply sent!
		});
	}
});

module.exports = bot;
