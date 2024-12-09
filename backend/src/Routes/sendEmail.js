const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', async (req, res) => {
    console.log('Rota funcionando')
    const formData = req.body;

    console.log(formData)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "andersonvittor1801@gmail.com",
            pass: "zknx vqar qtef qyvj",
        }
    })

    // Detalhes do email 
    const mailOptions = {
        from: `"${formData.nome}" <${formData.email}>`,
        to: "andersonvittor1801@gmail.com",
        subject: "Nova Proposta de trabalho",
        html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #2E86C1;">Nova Proposta de Trabalho</h2>
            <p><strong>Nome: </strong> ${formData.nome}</p>
            <p><strong>Email: </strong> ${formData.email}</p>
            <p><strong>Mensagem: </strong></p>
            <p>${formData.mensagem}</p>
            <div style="margin-top: 30px; font-size: 12px; color: #999;">
                <p>Este é um e-mail automático, por favor não responda.</p>
            </div>
        </div>
    `,
    }

    try {
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Erro ao enviar e-mail: ", error)
            } else {
                console.log("E-mail enviado com sucesso ", info.response)
                res.status(200)
            }
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router