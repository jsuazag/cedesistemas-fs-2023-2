const errorHandler = (errorItem, extra = {}) => {
  const response = {
    ...extra,
    message: errorItem.message
  }

  return {
    status: errorItem.status,
    response,
    handled: true
  }
}

module.exports = errorHandler
