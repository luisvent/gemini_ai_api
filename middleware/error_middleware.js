const winston = require('winston');
const {error} = require('node-http-response-wrapper');

module.exports = function(err, req, res, next){
  winston.error(err.message, err);
  return error(res, 'Something Failed', err.message);
}
