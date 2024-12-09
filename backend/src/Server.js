const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
require('dotenv').config();
app.use(cors())

console.log("Email User:", process.env.EMAIL_USER);  // Verifique o email
console.log("Email Pass:", process.env.EMAIL_PASS);  // Verifique a senha

// Middleware para processar json nas requisicoes
app.use(express.json())

const indexRoute = require('./Routes/indexRoute')
const sendEmailRoute = require('./Routes/sendEmail')

app.use('/', indexRoute)
app.use('/sendEmail', sendEmailRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})