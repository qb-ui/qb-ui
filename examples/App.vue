<template>
  <div id="app">
    <qb-row>
      <qb-button>一个按钮</qb-button>
    </qb-row>
    <qb-row>
      <i class="qb-icon qb-icon-md-add"></i>
    </qb-row>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  padding: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.qb-icon {
  width: 30px;
  height: 30px;
  font-size: 20px;
}
</style>
