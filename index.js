require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Worlds Meet Gang')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>We Dont Have What Your Looking For</h1>')
})

app.listen(process.env.PORT)

