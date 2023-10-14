const DictErrors = {
  USER_PASS_WRONG: {
    status: 401,
    message: 'user or password wrong'
  },
  USER_ALREADY_EXISTS: {
    status: 432,
    message: 'user already exists'
  },
  SERVER_ERROR: {
    status: 500,
    message: 'server internal error'
  }
}

module.exports = DictErrors
