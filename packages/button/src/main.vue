<template>
  <button class="qb_button">默认按钮</button>
</template>

<script>
export default {
  name: 'qbButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  }
}
</script>

<style scoped>
.qb_button {
  width: 100px;
  height: 40px;
  font-size: 14px;
  color: #606266;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.qb_button:hover {
  color: #409eff;
  border: 1px solid #409eff;
}
</style>
