const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
require('dotenv').config();

app.use(cors({
    origin: 'https://luvsscorpius.github.io/dev-and-portfolio-react/', // Domínio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
  }));

// Middleware para processar json nas requisicoes
app.use(express.json())

const indexRoute = require('./Routes/indexRoute')
const sendEmailRoute = require('./Routes/sendEmail')

app.use('/', indexRoute)
app.use('/sendEmail', sendEmailRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})