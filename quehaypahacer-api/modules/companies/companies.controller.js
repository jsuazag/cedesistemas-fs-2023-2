const companiesService = require('./companies.service')

const create = async (req, res) => {
  try {
    const companyData = req.body
    const response = await companiesService.create(companyData)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  create
}
