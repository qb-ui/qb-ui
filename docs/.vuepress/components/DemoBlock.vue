<template>
  <div class="demo">
    <div class="demo--title">
      <h3>{{title}}</h3>
      <p>{{desc}}</p>
    </div>
    <div class="demo--wrap">
      <div class="demo-content">
        <slot name="demoContent"></slot>
      </div>
    </div>
    <div v-if="isShow" class="demo--highlight">
      <slot name="codeText"></slot>
    </div>
    <div v-if="$slots.codeText" class="code--button" @click="handleToggleShow">{{codeTextBtn}}</div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    // 当前 demo 的名称
    title: {
      type: String,
      default: ''
    },
    // 当前 demo 的描述
    desc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      codeTextBtn: '显示代码'
    }
  },
  methods: {
    handleToggleShow () {
      this.isShow = !this.isShow
      this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码'
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
    // box-shadow: 0 0 2px 0 rgba(232, 237, 250, 0.6),
    //   0 1px 2px 0 rgba(232, 237, 250, 0.5);
  .demo--title {
    p {
      white-space: pre-wrap;
    }
  }
  .demo--wrap {
    border: 1px solid #DCDFE6;
    border-bottom: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    .demo-content {
      box-sizing: border-box;
      padding: 3%;
      border-bottom: 1px solid #ddd;
      > div {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .demo--highlight {
    border-left: 1px solid #DCDFE6;
    border-right: 1px solid #DCDFE6;
    > pre {
      margin: 0;
      border-radius: 0;
    }
  }
  .code--button {
    background: #fff;
    color: lighten($color: #409eff, $amount: 20%);
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #DCDFE6;
    border-top: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    transition: all 0.3s;
    &:hover {
      background-color: #f9fafc;
      color: #409eff;
    }
  }
  & + .code {
    margin-top: 40px;
  }
  &:not(:first-child) {
    margin-top: 40px;
  }
}
</style>