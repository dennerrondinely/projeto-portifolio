import Home from './views/home/home.vue'
import Contato from './views/contato/contato.vue';
import Curriculo from './views/curriculo/curriculo.vue';
import Artes from './views/artes/artes.vue';
import Baloes from './views/artes/paginas/baloes.vue';
import Estrelas from './views/artes/paginas/estrelas.vue';
import Lobo from './views/artes/paginas/lobo.vue';
import Lago from './views/artes/paginas/lago.vue';
import Espaco from './views/artes/paginas/espaco.vue';
import Sol from './views/artes/paginas/sol.vue';
import Portfolio from './views/portifolio/portifolio.vue';
import Login from './views/portifolio/paginas/login.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/contato', component: Contato },
    { path: '/curriculo', component: Curriculo },
    { path: '/artes', component: Artes },
    { path: '/artes/baloes', component: Baloes },
    { path: '/artes/estrelas', component: Estrelas },
    { path: '/artes/lobo', component: Lobo },
    { path: '/artes/lago', component: Lago },
    { path: '/artes/espaco', component: Espaco },
    { path: '/artes/sol', component: Sol },
    { path: '/portifolio', component: Portfolio },
    { path: '/portifolio/login', component: Login }
];
