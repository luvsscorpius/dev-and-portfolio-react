const express = require('express')
const app = express()
const port = 2000

const indexRoute = require('./Routes/indexRoute')

app.use('/', indexRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})