<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/menu/menu.vue';

import './style/style.scss';

export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>
