var express = require('express');
const {notFound} = require("node-http-response-wrapper");
const router = express.Router();

const notFoundRoute = (req, res) => {
    return notFound(res, 'Endpoint not found: ' + req.originalUrl, {});
}

router.all('*', notFoundRoute);

module.exports = router;
