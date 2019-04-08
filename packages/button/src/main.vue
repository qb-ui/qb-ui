<template>
  <button
    class="qb-button"
    @click="$emit('click')"
    :disabled="disabled"
    :class="[
    type ? 'qb-button--' + type : '',
    size ? 'qb-button--' + size : '',
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round, 'is-circle': circle,'is-loading': loading}]"
  >
    <i class="qb-icon-loader" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
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
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
    circle: Boolean
  }
}
</script>
