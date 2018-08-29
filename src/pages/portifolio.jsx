import React from 'react'

import Menu from '../componentes/menu'
import Card from '../componentes/minicard'

export default props => (
    <div>
        <Menu />
        <div className="main">
            <h1>Portfólio</h1>
            <Card url='img/login.jpg' link='#/portifolioum' hUm='Projeto pessoal' hDois='Web Design' />
        </div>

    </div >
)