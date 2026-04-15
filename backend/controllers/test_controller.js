const Test = require('../models/test_model');

const getTest = async (req, res) => {
  const id = req.params.id;
  const test = await Test.findById(id)

  if (!test) {
      return res.status(404).json({error: 'No such test'});
  }

  res.status(200).json(test)
}

const getAllTests = async (req, res) => {
  const tests = await Test.find({}).sort({ name: 1 });
  res.status(200).json(tests);
}


module.exports = {
    getTest,
    getAllTests
};