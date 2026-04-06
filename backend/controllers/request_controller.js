const Request = require('../models/request_model');


const createRequest = async (req, res) => {
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


const toggleArchive = async (req, res) => {
  const code = req.params.code;

  try {
    const requestDoc = await Request.findById(code);
    if (!requestDoc) {
      return res.status(404).json({ message: "Request not found" });
    }

    requestDoc.isArchived = !requestDoc.isArchived;
    await requestDoc.save();

    res.status(200).json(requestDoc);
  }
  
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    createRequest,
    getRequest,
    getAllRequests,
    toggleArchive
};