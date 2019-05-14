<template>
  <div
    class="demo-icon"
    title="点击复制"
    v-clipboard:copy="`qb-icon-${iconName}`"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError"
  >
    <div class="icon--wrap">
      <i :class="[iconName? `qb-icon-${iconName}`:'']"></i>
    </div>
    <div class="icon--name">
      <span>{{iconName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoIcon',
  props: {
    iconName: String
  },
  methods: {
    onCopy: function (e) {
      alert('复制成功: ' + e.text)
    },
    onError: function (e) {
      alert('复制失败，请手动选择复制！')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../src/packages/theme-default/src/common/var.scss';

.demo-icon {
  .icon--wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    > i {
      font-size: 36px;
      transition: all 0.3s;
    }
  }
  .icon--name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #a1aab8;
    padding: 5px 0 15px 0;
    transition: all 0.3s;
  }
  &:hover {
    .icon--wrap {
      > i {
        color: $--color-primary;
      }
    }
    .icon--name {
      color: $--color-primary;
    }
  }
}
</style>