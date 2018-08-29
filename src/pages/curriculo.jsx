import React from 'react'

import Menu from '../componentes/menu'

export default props => (
    <div>
        <Menu />
        <div className="main" id="curriculo">

            <h1>Currículo</h1>


            <h2>Dados Pessoais</h2>
            <hr />
            <img className="cv-pic" src="img/denner.jpg" alt="foto de Ivan Gomes" />

            <h3>Nome:</h3>

            <p>Dênner Rondinely da Silva</p>

            <h3>Data de Nascimento:</h3>

            <p>15/09/1991</p>

            <h3 style={{ clear: 'left' }}>Residência:</h3>

            <p>Juiz de Fora, Brasil</p>

            <h3 style={{ clear: 'left' }}>Idiomas:</h3>

            <p>Português (Nativo)</p>


            <h2>Sobre Mim</h2>
            <hr />

            <p>Neste espaço escreva uma história sobre sua carreira. Fale sobre sua
                trajetória, suas conquistas e sobre o que você gosta de fazer. Pode incluir
                algo breve sobre o que você faz em seu tempo livre. Veja o exemplo do meu
				currículo em <a href="http://www.ivanlourencogomes.com" target="_blank">www.ivanlourencogomes.com</a></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque ipsum vitae malesuada ultrices. Proin suscipit nulla odio, sit
                amet cursus ipsum fringilla ac. Morbi et turpis odio. Praesent diam ex,
                malesuada ornare neque et, placerat tincidunt nunc. Ut sit amet ex
                tincidunt, viverra nisl vitae, aliquam purus. Nam purus dolor, maximus in
				quam sed, aliquam congue ipsum. Integer eleifend id ante sed porta.</p>

            <p>Sed posuere sit amet mi ac rhoncus. Donec ac pretium nibh. Curabitur id
                nisi et lorem efficitur molestie. Quisque diam nulla, pulvinar sit amet
                porttitor id, mollis viverra leo. Fusce in tellus porttitor, suscipit turpis
                et, faucibus dui. Donec sit amet magna id nunc bibendum fermentum. Praesent
                quam odio, venenatis non tellus eu, molestie luctus erat. Mauris eu
				ultricies metus.</p>


            <h2>Educação</h2>
            <hr />

            <h3>data-Em andamento</h3>

            <p>Curso/Mestrado/Universidade</p>

            <h3>data-data</h3>

            <p>Curso/Mestrado/Universidade</p>

            <h3>data-data</h3>

            <p>Curso/Mestrado/Universidade</p>


            <h2>Habilidades</h2>
            <hr />

            <h3>Tema 1</h3>

            <p>Habilidade 1 / Habilidade 2...</p>

            <h3>Tema 1</h3>

            <p>Habilidade 1 / Habilidade 2...</p>

            <h3>Tema 1</h3>

            <p>Habilidade 1 / Habilidade 2...</p>

            <h3>Tema 1</h3>

            <p>Habilidade 1 / Habilidade 2...</p>


            <h2>Experiência de Trabalho</h2>
            <hr />

            <h3>23/03/2018</h3>

            <p>Desenvolvedor Front-end Júnior - Smart NX - Juiz de Fora</p>

            <h3>21/06/2016-23/03/2018</h3>

            <p>Estagiário - Mercedes-Benz do Brasil - Juiz de Fora</p>

            <h3>22/09/2014-20/06/2016</h3>

            <p>Estagiário - T-Systems do Brasil - Juiz de Fora</p>




            <h2>Contato</h2>
            <hr />

            <p>denner.rondinely@gmail.com</p>
            <p>(32) 98423-8734</p>


            <a className="back-link" href="index.html">&larr; Voltar ao início</a>


        </div>
    </div>
)