<template>
  <i :class="'qb-icon-' + name"></i>
</template>

<script>
export default {
  name: 'QbIcon',
  props: {
    name: String
  }
}
</script>
