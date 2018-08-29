import React from 'react'

export default props => (
    <div>
        <div id="menu-nav--principal" className={props.estado}>
            <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/portifolio">Portfolio</a></li>
                <li><a href="#/artes">Artes</a></li>
                <li><a href="#/curriculo">Currículo</a></li>
                <li><a href="#/contato">Contato</a></li>
                <li id="threeline-icon" className="threeline-icon" onClick={props.estado == 'menu-nav--principal' ? props.handleOpen : props.handleClose} ><i className={`fa ${props.icon}`}></i></li>
                <input type="hidden" value={props.icon}/>
            </ul>
        </div>
    </div>
)