const jwt = require('jsonwebtoken')

const authVerify = (req, res, next) => {
  // "Bearer xxxxxxx" -> ["Bearer", "xxxxxxx"]
  if (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === 'Bearer') {

      const token = req.headers.authorization.split(" ")[1]

      try {

        const decoded = jwt.verify(token, 'millavesecretadetokenquenadiepuedever')
        req.payload = decoded

      } catch (error) {
        return res.status(401).send('unauthorization - invalid token')
      }
  } else {
    return res.status(401).send('unauthorization')
  }
  next()
}

module.exports = authVerify
