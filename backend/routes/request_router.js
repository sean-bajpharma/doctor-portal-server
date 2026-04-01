const express = require('express');
const { createRequest, getAllRequests, getRequest } = require('../controllers/request_controller');
const router = express.Router();

router.post('/add', createRequest)
router.get('/get-all', getAllRequests)
router.get('/get/:code', getRequest)

module.exports = router;