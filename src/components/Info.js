import React from "react"

export default function Info(){
    return(
        <nav className="nav-bar">
            <img className="img-perfil" src="./images/20220601_133441.jpg" />
            <h1>Marcos Paulo Pacífico</h1>
            <h2>Frontend Dev Student</h2>
            <button className="mail-button" onClick={mail}><img src="../images/mail-logo.png"/>Email</button>
        </nav>
    )
}

function mail(){
    window.open('mailto:marcospacifico@usp.br','_blank')
}