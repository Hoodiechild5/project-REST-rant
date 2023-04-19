require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('<h1>We Dont Have What Your Looking For</h1>')
})

app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)
