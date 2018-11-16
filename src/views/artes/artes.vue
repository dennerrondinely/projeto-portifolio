<template>
<div class="main">
    <h1>Artes</h1>

        <Miniatura v-for="mini in miniatura" :key="mini.id"
            :titulo ="mini.titulo"
            :desc ="mini.desc"
            :referencia ="'artes/'+mini.referencia"
            :image ="mini.image"
        />
    </div>
</template>
<script>
import Miniatura from "../../components/miniatura/miniatura.vue";
export default {
  name: "artes",
  data: function() {
    return {
      miniatura: [
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "baloes",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Fbaloes.jpg?alt=media&token=e45c0ab1-ba0f-4cb4-a36b-c275145712a7"
        },
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "estrelas",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Festrelas.jpg?alt=media&token=44bd22df-4826-4720-a814-1599d7412ce6"
        },
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "lobo",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Flobo.jpg?alt=media&token=ef119f65-0956-41e8-b7c4-f230595a36a6"
        },
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "lago",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Flago.jpg?alt=media&token=00f05723-0425-4b41-af4d-fd5e8e78d2b7"
        },
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "espaco",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Fespaco.jpg?alt=media&token=cad2d3aa-6208-4eb8-8419-62da261407b8"
        },
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "sol",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/artes%2Fsol.jpg?alt=media&token=27183ed1-6295-41dd-8eb3-c5f8d5b4c651"
        }
      ]
    };
  },
  components: {
    Miniatura
  }
};
</script>
