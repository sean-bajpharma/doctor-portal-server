const Request = require('../models/request_model');


const createRequest = async (req, res) => {
    if (!req.body.patientId || !req.body.doctorId || !req.body.tests) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }

  try {
    const request = await Request.create(req.body);
    res.status(201).json({ request });
  }
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getRequest = async (req, res) => {
    const code = req.params.code;
    const request = await Request.findById(code)

    if (!request) {
        return res.status(404).json({error: 'No such request'});
    }

    res.status(200).json(request)
}

const getAllRequests = async (req, res) => {
    const requests = await Request.find({});
    res.status(200).json(requests);
}

module.exports = {
    createRequest,
    getRequest,
    getAllRequests
};