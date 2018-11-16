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
  name: "espaco",
  data: function() {
    return {
      pagina: [
        {
          titulo: "Espaço",
          desc: "Designe Gráfico",
          image: "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Ftrabalhos%2Filustracao_ceu_e_estrelas.jpg?alt=media&token=3ef65dfc-8779-4f23-a7f7-c2ec73d33875",
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
