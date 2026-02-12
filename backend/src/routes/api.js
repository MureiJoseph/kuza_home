const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');

router.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

router.get('/programs', programController.getAllPrograms);

module.exports = router;
