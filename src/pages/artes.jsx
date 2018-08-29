import React from 'react'

import Menu from '../componentes/menu'
import Card from '../componentes/minicard'

export default props => (
    <div>
        <Menu />
        <div className="main">

            <h1>Portfolio</h1>

            <Card url='img/baloes.jpg' link='#/baloes' hUm='Projeto pessoal' hDois='Web Design' />
            <Card url='img/estrelas.jpg' link='#/estrelas' hUm='Projeto pessoal' hDois='Web Design' />
            <Card url='img/lobo.jpg' link='#/lobo' hUm='Projeto pessoal' hDois='Web Design' />
            <Card url='img/lago.jpg' link='#/lago' hUm='Projeto pessoal' hDois='Web Design' />
            <Card url='img/espaco.jpg' link='#/espaco' hUm='Projeto pessoal' hDois='Web Design' />
            <Card url='img/sol.jpg' link='#/entardecer' hUm='Projeto pessoal' hDois='Web Design' />

        </div>
    </div>    
)