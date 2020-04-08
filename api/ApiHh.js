const request = require('request');

class ApiHh {
	vacancies;

	getVacancies(skill) {
		const encodedSkill = encodeURI(skill);

		return new Promise((resolve, reject) => {
			request({
				url: `https://api.hh.ru/vacancies?text=${encodedSkill}`,
				headers: {
					'User-Agent': 'telegram-bot (https://github.com/akashuba/Selkie)'
				}
			},
			(error, response) => {
				if (!error && response.statusCode == 200) {
			
					resolve(this.vacancies = response.body)
				} else {
					console.log(error);
				}
			})
		})
	}
}

exports.ApiHh = ApiHh;