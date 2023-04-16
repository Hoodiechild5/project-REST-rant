const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('We made it')
})

module.exports = router
