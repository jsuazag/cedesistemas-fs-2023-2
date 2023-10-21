const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//conn
require('./conn/conn.mongo')

//modules
app.use('/users', require('./modules/users/users.routes'))


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
