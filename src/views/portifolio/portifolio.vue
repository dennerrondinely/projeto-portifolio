<template>
<div class="main">
    <h1>Portfolio</h1>

        <Miniatura v-for="mini in miniatura" :key="mini.id"
            :titulo ="mini.titulo"
            :desc ="mini.desc"
            :referencia ="'portifolio/'+mini.referencia"
            :image ="mini.image"
        />
    </div>
</template>
<script>
import Miniatura from "../../components/miniatura/miniatura.vue";
export default {
  name: "portifolio",
  data: function() {
    return {
      miniatura: [
        {
          titulo: "Projeto pessoal",
          desc: "Designe Gráfico",
          referencia: "login",
          image:
            "https://firebasestorage.googleapis.com/v0/b/portifolio-d34f0.appspot.com/o/portifolio%2Flogin_principal.jpg?alt=media&token=012c77aa-ca86-4467-9595-6a2e65ef82f7"
        }
      ]
    };
  },
  components: {
    Miniatura
  }
};
</script>
