const router = require('express').Router()

router.use('*', (req, res) => {
    res.json({ api: 'up'})
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stacl: err.stack,
    })
})

module.exports = router