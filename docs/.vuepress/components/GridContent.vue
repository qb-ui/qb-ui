<template>
  <div class="grid-content" :class="{'bg1':bg1,'bg2':bg2,'bg3':bg3}"></div>
</template>

<script>
export default {
  name: 'GridContent',
  props: {
    bg1: Boolean,
    bg2: Boolean,
    bg3: Boolean
  }
}
</script>

<style lang="scss" scoped>
.grid-content {
  width: 100%;
  min-height: 36px;
  border-radius: 4px;
  &.bg1 {
    background-color: #99a9bf;
  }
  &.bg2 {
    background-color: #d3dce6;
  }
  &.bg3 {
    background-color: #e5e9f2;
  }
}
</style>