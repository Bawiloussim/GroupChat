const express = require('express');
const router = express.Router();
const { getRoomMessages } = require('../controllers/messageController');


router.get('/:roomId', getRoomMessages);
router.post('/', sendMessage);

module.exports = router;