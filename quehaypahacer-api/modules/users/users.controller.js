const usersService = require('./users.service')

const login = async (req, res) => {
  try {
    const {email, password} = req.body
    const response = await usersService.login(email, password)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

const signup = async (req, res) => {
  try {
    const userData = req.body
    const response = await usersService.create(userData)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

module.exports = {
  login,
  signup
}
