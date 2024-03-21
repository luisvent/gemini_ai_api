const error = require('../middleware/error_middleware');
const aiRouter = require("../routes/ai_route");
const notFoundRouter = require("../routes/not_found_route");

const initRoutes = (app) => {
  app.use('/', aiRouter);

  app.use(error);
  app.use('*', notFoundRouter)
}

module.exports = {
  init: initRoutes
}
