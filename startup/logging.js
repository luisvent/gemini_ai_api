const winston = require('winston');
require('express-async-errors');
const httpLogger = require("morgan");
const system = require('../services/system_service');

const logErrorsToFile = () => {
  winston.add(
      new winston.transports.File({ filename: 'logs/errors.log', level: 'warn', handleRejections: true, handleExceptions: true }),
  );
}

const logToConsole = () => {
  if (system.isDevelopment()) {
    winston.add(new winston.transports.Console({
      handleExceptions: true,
      handleRejections: true,
      format: winston.format.combine(
          winston.format.prettyPrint(),
          winston.format.colorize(),
          winston.format.simple()
      ),
    }));
  }
}

const logHttpRequests = (app) => {
  const httpWinstonLogger = new winston.createLogger({
    transports: [
      new winston.transports.File({
        level: 'info',
        filename: 'logs/http.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, //5MB
        maxFiles: 5,
        colorize: false
      }),
      new winston.transports.Console({
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
      })
    ],
    exitOnError: false
  });

  app.use(httpLogger('combined', {stream: {write: message => httpWinstonLogger.info(message)}}));
}

const initLogging = (app) => {
  logErrorsToFile();
  logToConsole();
  logHttpRequests(app);
}

module.exports = {
  init: initLogging
}
