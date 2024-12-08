import React from 'react'
import * as C from './Styles'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
    return (
        <main style={{ display: "flex", justifyContent: "center", backgroundColor: "#0A0A0A" }}>
            <C.mainContent>
                <C.formContainer>
                    <div className="titleContent">
                        <h1>Vamos Trabalhar Juntos!</h1>
                    </div>

                    <C.formContent>
                        <div className="firstInputs">
                            <input type="text" placeholder='Nome' />
                            <input type="text" placeholder='Sobrenome' />
                        </div>
                        <div className="secondInputs">
                            <input type="email" placeholder='E-mail' />
                            <input type="text" placeholder='Telefone' />
                        </div>

                        <textarea name="textarea" id="textarea" placeholder='Digite sua mensagem...'></textarea>
                        <button>Enviar</button>
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
