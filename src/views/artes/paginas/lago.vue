<template>
    <div class="main">
        <Paginas v-for="p in pagina" :key="p.id"
            :titulo ="p.titulo"
            :desc ="p.desc"
            :paragrafo="p.paragrafo"
            :image ="p.image"
        />
	</div>
</template>
<script>
import Paginas from "../../../components/paginas/paginas.vue";
export default {
  name: "lago",
  data: function() {
    return {
      pagina: [
        {
          titulo: "Lago",
          desc: "Designe Gráfico",
          image: "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Ftrabalhos%2Flago.jpg?alt=media&token=a85a461b-c86c-4572-9fa0-1ccf295d71fe",
          paragrafo: [
            {
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.`
            },
            {
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.`
            }
          ]
        }
      ]
    };
  },
  components: { Paginas }
};
</script>
