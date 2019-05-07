<template>
  <div>
    <qb-button @click="handleButtonToggle">点我演示</qb-button>

    <transition name="qb-fade-in">
      <qb-button type="primary" v-show="buttonShow">qb-fade-in</qb-button>
    </transition>
    <transition name="qb-fade-in-linear">
     <qb-button type="primary" v-show="buttonShow">qb-fade-in-linear</qb-button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransitionDemoFade',
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