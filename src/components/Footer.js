import React from "react"

export default function Footer(){
    return(
        <footer className="footer-container">
            <button className="twitter" onClick={tt}><img src="./images/tt.png"/></button>
            <button className="facebook" onClick={fb}><img src="./images/fb.png"/></button>
            <button className="instagram" onClick={ig} ><img src="./images/ig.png"/></button>
            <button className="github" onClick={gh}><img src="./images/gh.png"/></button>
        </footer>
    )
}

function tt(){
    
    window.open('https://twitter.com/Paulocaas', '_blank')
  
    
}

function fb(){
    
    window.open('https://www.facebook.com/marcospaulo.pacifico.1', '_blank')
  
    
}

function ig(){
    
    window.open('https://www.instagram.com/pacifico.mp/', '_blank')
    
}

function gh(){
    
    window.open('https://github.com/Paulocaas', '_blank')
    
}