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
  name: "estrelas",
  data: function() {
    return {
      pagina: [
        {
          titulo: "Estrelas",
          desc: "Designe Gráfico",
          image: "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Ftrabalhos%2Fcasal_e_estrelas4.jpg?alt=media&token=c6c06cbb-8527-4184-9c82-488af18a2962",
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
