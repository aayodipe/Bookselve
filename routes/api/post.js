const express = require('express')
const router = express.Router()

router.post('/post', (req, res )=>{
     res.json({hello:"more"})
})

module.exports = router