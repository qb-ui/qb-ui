<template>
  <div>
    <qb-button @click="handleButtonToggle">点我演示</qb-button>

    <transition name="qb-zoom-in-left">
      <qb-button type="primary" v-show="buttonShow">qb-zoom-in-left</qb-button>
    </transition>
    <transition name="qb-zoom-in-center">
     <qb-button type="primary" v-show="buttonShow">qb-zoom-in-center</qb-button>
    </transition>
    <transition name="qb-zoom-in-top">
     <qb-button type="primary" v-show="buttonShow">qb-zoom-in-top</qb-button>
    </transition>
    <transition name="qb-zoom-in-bottom">
     <qb-button type="primary" v-show="buttonShow">qb-zoom-in-bottom</qb-button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransitionDemoZoom',
  data() {
    return {
      buttonShow: true
    }
  },
  methods: {
    handleButtonToggle() {
      this.buttonShow = !this.buttonShow
    }
  }
}
</script>

<style lang="scss" scoped>
</style>