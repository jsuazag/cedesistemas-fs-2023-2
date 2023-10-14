const errorHandler = (errorItem, extra = {}) => {
  const response = {
    ...extra,
    message: errorItem.message
  }

  return {
    status: errorItem.status,
    response
  }
}

module.exports = errorHandler
