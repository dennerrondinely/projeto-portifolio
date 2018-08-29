import React from 'react'
import Menu from '../componentes/menu'

export default props => (
    <div>
        <Menu />
        <div className="main">

            <h1>Portfolio</h1>

            <img className="foto-trabalhos-mobile" src="img/trabalhos/login_mobile.jpg" alt="" />
            <img className="foto-trabalhos" src="img/trabalhos/login.jpg" alt="" />

            <h2>Descrição do Projeto</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum."</p>
        </div>
    </div>
    
)