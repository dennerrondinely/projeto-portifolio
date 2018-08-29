import React from 'react'

import Menu from '../componentes/menu'

export default props => (
    <div>
        <Menu />
        <div className="main">


            <ul className="caminho">
                <li><a href="#/home">Home</a></li>
                <li>></li>
                <li>Contato</li>
            </ul>

            <h1>Contato</h1>


            <h3>E-mail:</h3>
            <p>denner.rondinely@gmail.com</p>

            <h3>Telefone:</h3>
            <p>(32) 98423-8734</p>

            <h3>Redes Sociais:</h3>
            <div className="icons-contato">
                <a href="https://www.linkedin.com/in/denner-rondinely-da-silva/" target="_blank"><div className="redes-sociais" id="linkedin"></div></a>
                <a href="https://github.com/dennerrondinely" target="_blank"><div className="redes-sociais" id="github"></div></a>
                <a href="https://codepen.io/denner-rondinely/" target="_blank"><div className="redes-sociais" id="codepen"></div></a>
                <a href="https://www.instagram.com/dennerrondinely/" target="_blank"><div className="redes-sociais" id="instagram"></div></a>
            </div>

        </div>


    </div>
)