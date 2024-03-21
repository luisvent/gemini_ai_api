var express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai_controller');

router.post('/', aiController.prompt);

module.exports = router;
