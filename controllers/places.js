const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('First Resturant to review')
})

module.exports = router
