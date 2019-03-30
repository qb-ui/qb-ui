<template>
  <div id="app">
    <MqbHeader></MqbHeader>
    <div class="main">App.vue</div>
    <!-- <MqbFooter></MqbFooter> -->
  </div>
</template>

<script>
import MqbHeader from './components/Header'
// import MqbFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    MqbHeader
    // MqbFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
