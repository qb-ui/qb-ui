<template>
  <button
    class="qb-button"
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
    type ? 'qb-button--' + type : '',
    buttonSize ? 'qb-button--' + buttonSize : '',
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round, 'is-circle': circle},]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'qbButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    buttonSize: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
    circle: Boolean
  }
}
</script>
