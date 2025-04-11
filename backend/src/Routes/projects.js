const express = require('express')
const router = express.Router()
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

// Função para fazer uploads de imagens dos projetos na web
const uploadToImgur = async (filePath) => {
    const form = new FormData()
    form.append('image', fs.createReadStream(filePath))

    try {
        const response = await axios.post('https://api.imgur.com/3/image', form, {
            headers: {
                ...form.getHeaders(),
                Authorization: 'Client-ID 789d7c3d28c1d0d'
            }
        })

        console.log('📷 URL da imagem', response.data.data.link)
        return response.data.data.link;
    } catch (error) {
        console.error('❌ Erro ao enviar a imagem:')
    }
}

uploadToImgur('../../../frontend/src/assets/img/beautyHair.png')

router.post('/', async (req, res) => {


})