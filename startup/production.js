const helmet = require('helmet');
const compression = require('compression');
const system = require('../services/system_service');

const initProd = (app) => {
    if(system.isProduction()) {
        app.use(helmet());
        app.use(compression());
    }
}

module.exports = {
    init: initProd
}
