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
  name: "baloes",
  data: function() {
    return {
      pagina: [
        {
          titulo: "Balões",
          desc: "Designe Gráfico",
          image: "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Ftrabalhos%2Fbaloes.jpg?alt=media&token=b094768d-2363-4db0-a91d-cb534b6c1f6b",
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
