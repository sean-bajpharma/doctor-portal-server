const express = require('express');
const { createRequest, getAllRequests, getRequest, toggleArchive } = require('../controllers/request_controller');
const router = express.Router();

router.post('/add', createRequest)
router.get('/get-all', getAllRequests)
router.get('/get/:code', getRequest)
router.patch('/toggle-archive/:code', toggleArchive)

module.exports = router;