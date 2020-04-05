const ApiHh = require('./ApiHh').ApiHh;

class Api {

	hh = new ApiHh();
} 

exports.api = new Api();
