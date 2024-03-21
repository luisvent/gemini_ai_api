const express = require('express');
const config = require('./startup/config');
const production = require('./startup/production');
const initApp = require('./startup/init_app');
const logging = require('./startup/logging');
const routes = require('./startup/routes');

const app = express();

logging.init(app);
config.init(app);
routes.init(app);
production.init(app);
initApp.init(app);

module.exports = app;
