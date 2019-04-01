<template>
  <button class="qb-button">默认按钮</button>
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
