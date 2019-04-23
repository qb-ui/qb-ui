<template>
  <div>
    <qb-button @click="handleButtonToggle">点我演示</qb-button>

    <transition name="qb-slide-in-left">
      <qb-button type="primary" v-show="buttonShow">qb-slide-in-left</qb-button>
    </transition>
    <transition name="qb-slide-in-top">
     <qb-button type="primary" v-show="buttonShow">qb-slide-in-top</qb-button>
    </transition>
    <transition name="qb-slide-in-bottom">
     <qb-button type="primary" v-show="buttonShow">qb-slide-in-bottom</qb-button>
    </transition>
    <transition name="qb-slide-in-right">
     <qb-button type="primary" v-show="buttonShow">qb-slide-in-right</qb-button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransitionDemoSlide',
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