const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola mundo express GET!!!')
})

app.post('/', (req, res) => {
    res.send('Hola mundo express POST!!!')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})