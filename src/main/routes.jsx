import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import PagePrincipal from '../pages/pagePrincipal'
import Portifolio from '../pages/portifolio'
import PortifolioUm from '../pages/portifolio_1'
import Artes from '../pages/artes'
import Baloes from '../pages/artesBaloes'
import Estrelas from '../pages/arteEstrelas'
import Lobo from '../pages/artesLobo'
import Lago from '../pages/artesLago'
import Espaco from '../pages/artesEspaco'
import Entardecer from '../pages/artesEntardecer'
import Curriculo from '../pages/curriculo'
import Contato from '../pages/contato'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={PagePrincipal} />
        <Route path='/portifolio' component={Portifolio} />
        <Route path='/portifolioum' component={PortifolioUm} />
        <Route path='/artes' component={Artes} />
        <Route path='/baloes' component={Baloes} />
        <Route path='/estrelas' component={Estrelas} />
        <Route path='/lobo' component={Lobo} />
        <Route path='/lago' component={Lago} />
        <Route path='/espaco' component={Espaco} />
        <Route path='/entardecer' component={Entardecer} />
        <Route path='/curriculo' component={Curriculo} />
        <Route path='/contato' component={Contato} />
        <Redirect from='*' to='/Home' />
    </Router>
)