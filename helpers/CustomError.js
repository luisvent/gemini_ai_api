class CustomError extends Error {

    originalError = null;

    constructor(message = "", error, ...args) {
        super(message, ...args);
        this.message = message;
        this.originalError = error;
    }
}

module.exports = {
    CustomError
}
