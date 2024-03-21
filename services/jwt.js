const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('config');

const JWT_KEY = config.get('jwt_private_key');

const generateToken = (user) => {
    const payload = {
      id: user._id,
      name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        role: user.role,
        image: user.image,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, JWT_KEY);
}

const decodeToken = (token) => {
    return jwt.decode(token, JWT_KEY);
}

const validateExpiration = (token) => {
    try {
        const payload = decodeToken(token);
        return payload.exp > moment().unix();
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = {
    generateToken,
    decodeToken,
    validateExpiration
}
