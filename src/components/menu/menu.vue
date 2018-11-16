<template>
  <div id="menu-nav--principal" class="menu-nav--principal">
			<ul>
				<router-link to="/" activeClass="active" tag="li"><a>Home</a></router-link>
				<router-link to="/portifolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
				<router-link to="/artes" activeClass="active" tag="li"><a>Artes</a></router-link>
				<router-link to="/curriculo" activeClass="active" tag="li"><a>Currículo</a></router-link>
				<router-link to="/contato" activeClass="active" tag="li"><a>Contato</a></router-link>
			</ul>
		</div>
</template>

<script>
import './style/style.scss'
export default {
  name: 'menu',
}
</script>
