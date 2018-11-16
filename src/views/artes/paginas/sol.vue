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
  name: "sol",
  data: function() {
    return {
      pagina: [
        {
          titulo: "Pôr do sol",
          desc: "Designe Gráfico",
          image: "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Ftrabalhos%2Fentardecer.jpg?alt=media&token=10c8a57a-c011-4469-b314-e616bd25efeb",
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
