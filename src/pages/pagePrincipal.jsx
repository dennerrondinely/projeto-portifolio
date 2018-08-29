import React from 'react'

import Menu from '../componentes/menu'

export default props => (
    <div>
        <Menu />
        <div className="capa-pagina--principal">

            <div className="profile-pic--principal">
                <img src={'/img/profile.jpg'} alt="logo" />
            </div>

            <div className="profile-title--principal">
                <h1>Dênner <span>Rondinely da Silva</span></h1>
                <h2>Desenvolvedor Web - Designer Gráfico - Estudante de Sistemas de Informação</h2>
            </div>

        </div>
    </div>

)