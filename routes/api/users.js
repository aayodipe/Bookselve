const express = require('express')
const router = express.Router()

router.get('/user', (req, res )=>{
     res.json({User:"Hi"})
})

module.exports = router