const bcrypt = require('bcrypt')
const errorHandler = require("../../utils/errorHandler")
const { USER_PASS_WRONG, USER_ALREADY_EXISTS, SERVER_ERROR } = require("./utils/users.dict.errors")
const User = require('./models/user.model')

const login = async (email, password) => {
  try {
    const user = await User.findOne({ email })
    if (await bcrypt.compare(password, user.password)) {
      return {
        token: 'yyyyyyyyzzzzzzzcccccc'
      }
    }
    throw errorHandler(USER_PASS_WRONG)
  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

const create = async (userData) => {
  try {

    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash

    const validateEmail = await User.findOne({ email: userData.email })
    if (validateEmail) {
      throw errorHandler(USER_ALREADY_EXISTS)
    }

    const user = User(userData)
    await user.save()

    return {
      user
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}


module.exports = {
  login,
  create
}
