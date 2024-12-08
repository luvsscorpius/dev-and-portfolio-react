import React from 'react'
import * as C from './Styles'

export const Contact = () => {
    return (
        <main style={{ border: "1px solid green", display: "flex", justifyContent: "center" }}>
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
                    teste
                </C.viewContainer>
            </C.mainContent>
        </main>
    )
}
