const express = require('express')
const app = express()
const port = 2000
const cors = require('cors')
require('dotenv').config();

const corsOptions = {
    origin: ['https://luvsscorpius.github.io'], // Domínio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization', "Access-Control-Allow-Methods", "Access-Control-Request-Headers"], // Cabeçalhos permitidos
    credentials: true,
    enablePreflight: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

// Middleware para processar json nas requisicoes
app.use(express.json())

const indexRoute = require('./Routes/indexRoute')
const sendEmailRoute = require('./Routes/sendEmail')

app.use('/', indexRoute)
app.use('/sendEmail', sendEmailRoute)

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})