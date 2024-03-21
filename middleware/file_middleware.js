const multer = require('multer');

const createStorage = (folder) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './images/' + folder + '/');
        },
        filename: (req, file, cb) => {
            cb(null, 'avatar_' + Date.now() + '_' + file.originalname);
        }
    });
}

const receive = (saveOnFolder, filePropertyName) => {
    return multer({storage: createStorage(saveOnFolder)}).single(filePropertyName);
}

module.exports = {
    receive
}
