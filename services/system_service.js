const config = require("config");

const isDevelopment = () => {
    return config.get('environment') === 'development';
}

const isProduction = () => {
    return config.get('environment') === 'production';
}

module.exports = {
    isDevelopment,
    isProduction
}
