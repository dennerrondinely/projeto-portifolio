<template>
		<div class="miniatura" v-bind:style="{ 'background-image': 'url('+image+')' }">
			<router-link v-bind:to="'/'+referencia" activeClass="active" tag="a">
				<div class="blackbox">
					<div class="blackbox-text">
						<h1>{{ titulo }}</h1>
						<h2>{{ desc }}</h2>
					</div>
				</div>
			</router-link>
		</div>
</template>
<script>
import "./style/style.scss";
export default {
  name: "miniatura",
  props:[
        'titulo',
        'desc',
        'referencia',
        'image',
    ]
};
</script>
