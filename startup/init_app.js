const config = require('config');
const winston = require("winston");

const PORT = config.get('server.port');

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

const initApp = (app) => {
    app.listen(normalizePort(PORT), () => {
        winston.info('Gemini API started on: ' + PORT);
    });
}

module.exports = {
    init: initApp
}

