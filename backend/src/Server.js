const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
app.use(cors())

// Middleware para processar json nas requisicoes
app.use(express.json())

const indexRoute = require('./Routes/indexRoute')
const sendEmailRoute = require('./Routes/sendEmail')

app.use('/', indexRoute)
app.use('/sendEmail', sendEmailRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})