const mongoose = require('mongoose');
const config = require('config');
const winston = require("winston");

const DB_URL = config.get('db_url');

const connection = async() => {
    try {
        await mongoose.connect(DB_URL);
        winston.info('Connected to MongoDB...');
    }catch (e) {
        winston.error('Error connecting to DB');
    }
}

module.exports = {
    init: connection
}
