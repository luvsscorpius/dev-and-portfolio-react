const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log('Rota funcionando')
    const formData = req.body;

    console.log(formData)
})

module.exports = router