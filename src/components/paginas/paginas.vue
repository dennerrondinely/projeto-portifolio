<template>
		<div>
			<h1>{{ titulo }}</h1>

			<img class="foto-trabalhos" v-bind:src="image" alt="">

			<h2>{{ desc }}</h2>
			<p v-for="p in paragrafo" :key="p.id">
				{{ p.text}}
			</p>
		</div>
</template>
<script>
import "./style/style.scss";
export default {
  name: "paginas",
  props:[
        'titulo',
		'desc',
		'paragrafo',
		'image',
    ]
};
</script>
