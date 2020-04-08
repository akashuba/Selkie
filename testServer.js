const http = require('http');
const api = require('./api/api').api;

http.createServer(async function(request, response) {
	response.setHeader("Content-Type", "application/json");

	try {
		if(request.url === "/") {
			response.write('It works');

		await api.hh.getVacancies('javascript');

		const vacancies = JSON.parse(api.hh.vacancies)

		console.log(vacancies.found);
		
			response.end();
		}
		
	} catch (error) {
		console.log('error: ', error);
	}
	
}).listen(3000);

console.log('Server running on: 3000');
