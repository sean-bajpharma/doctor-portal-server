const express = require('express');
const { getTest, getAllTests } = require('../controllers/test_controller');
const router = express.Router();

router.get('/get/:id', getTest)
router.get('/get-all', getAllTests)

module.exports = router;