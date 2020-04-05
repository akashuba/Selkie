const http = require('http');
const api = require('./api/api').api;

http.createServer(async function(request, response) {
	response.setHeader("Content-Type", "application/json");

	try {
		if(request.url === "/") {
			response.write('It works');

		await api.hh.getVacancies('cobol');

		const vacancies = JSON.parse(api.hh.vacancies)

		console.log(vacancies.items.length);
		
			response.end();
		}
		
	} catch (error) {
		console.log('error: ', error);
	}
	
}).listen(3000);

console.log('Server running on: 3000');
