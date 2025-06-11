const express = require('express');
const router = express.Router();
const { fetchMedia } = require('../controllers/mediaController');

router.get('/', fetchMedia);

module.exports = router;
