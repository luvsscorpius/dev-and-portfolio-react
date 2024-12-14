import React, { useState } from 'react'
import * as C from './Styles'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios'
import { toast } from 'react-toastify';

export const Contact = () => {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        mensagem: ""
    })

    const handleSendInfo = async (e) => {
        e.preventDefault()

        try {
            //Changing enpoint
            const response = await axios.post("https://dev-and-portfolio-react.vercel.app/sendEmail", formData, {
                headers: { 'Content-Type': 'application/json' }
            })
            console.log('testeee')
            console.log(response)
            setFormData({ nome: "", sobrenome: "", email: "", telefone: "", mensagem: "" });
            toast.success("E-mail enviado com sucesso")
        } catch (error) {
            console.error(error)
            toast.error("Falha ao enviar e-mail")
        }
    }

    return (
        <main style={{ display: "flex", justifyContent: "center", backgroundColor: "#0A0A0A" }}>
            <C.mainContent>
                <C.formContainer>
                    <div className="titleContent">
                        <h1>Vamos Trabalhar Juntos!</h1>
                    </div>

                    <C.formContent>
                        <div className="firstInputs">
                            <input type="text" placeholder='Nome' value={formData.nome} onChange={(e) => { setFormData({ ...formData, nome: e.target.value }) }} required />
                            <input type="text" placeholder='Sobrenome' value={formData.sobrenome} onChange={(e) => { setFormData({ ...formData, sobrenome: e.target.value }) }} required />
                        </div>
                        <div className="secondInputs">
                            <input type="email" placeholder='E-mail' value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} required />
                            <input type="text" placeholder='Telefone' value={formData.telefone} onChange={(e) => { setFormData({ ...formData, telefone: e.target.value }) }} required />
                        </div>

                        <textarea name="textarea" id="textarea" placeholder='Digite sua mensagem...' value={formData.mensagem} onChange={(e) => { setFormData({ ...formData, mensagem: e.target.value }) }} required></textarea>
                        <button onClick={(e) => handleSendInfo(e)}>Enviar</button>
                    </C.formContent>
                </C.formContainer>

                <C.viewContainer>
                    <div className="telDiv">
                        <div className="telIconDiv">
                            <FaPhoneAlt size={50} />
                        </div>

                        <div className="infoDiv">
                            <p>Telefone</p>
                            <p>(35) 99892-2086</p>
                        </div>
                    </div>

                    <div className="emailDiv">
                        <div className="emailIconDiv">
                            <MdEmail size={50} />
                        </div>

                        <div className="infoDiv">
                            <p>Email</p>
                            <p>andersonvittor1801@gmail.com</p>
                        </div>
                    </div>
                </C.viewContainer>
            </C.mainContent>
        </main>
    )
}
