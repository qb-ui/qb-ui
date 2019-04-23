---
title: '内置动画'
---

## 内置动画

组件库内置了一些过渡动画，可以直接使用。这一部分是参考的 <a href="http://element-cn.eleme.io/#/zh-CN/component/transition">Element-ui</a>。

<demo-block title="fade 淡入淡出" desc="提供 qb-fade-in-linear 和 qb-fade-in 两种效果。">
  <template slot="demoContent">
    <TransitionDemoFade></TransitionDemoFade>
  </template>

  <highlight-code slot="codeText" lang="html">
    <div>
      <qb-button @click="handleButtonToggle">点我演示</qb-button>
      <transition name="qb-fade-in">
        <qb-button type="primary" v-show="buttonShow">qb-fade-in</qb-button>
      </transition>
      <transition name="qb-fade-in-linear">
      <qb-button type="primary" v-show="buttonShow">qb-fade-in-linear</qb-button>
      </transition>
    </div>
  </highlight-code>
</demo-block>

<demo-block title="zoom 缩放" desc="提供 qb-zoom-in-left、center、top、bottom 四种效果。">
  <template slot="demoContent">
    <TransitionDemoZoom></TransitionDemoZoom>
  </template>

  <highlight-code slot="codeText" lang="html">
    <div>
      <qb-button @click="handleButtonToggle">点我演示</qb-button>
      <transition name="qb-zoom-in-left">
        <qb-button type="primary" v-show="buttonShow">qb-zoom-in-left</qb-button>
      </transition>
      <transition name="qb-zoom-in-center">
      <qb-button type="primary" v-show="buttonShow">qb-zoom-in-center</qb-button>
      </transition>
      <transition name="qb-zoom-in-top">
      <qb-button type="primary" v-show="buttonShow">qb-zoom-in-top</qb-button>
      </transition>
      <transition name="qb-zoom-in-bottom">
      <qb-button type="primary" v-show="buttonShow">qb-zoom-in-bottom</qb-button>
      </transition>
    </div>
  </highlight-code>
</demo-block>

<demo-block title="slide 滑入滑出" desc="提供 qb-slide-in-left、top、bottom、right 四种效果。">
  <template slot="demoContent">
    <TransitionDemoSlide></TransitionDemoSlide>
  </template>

  <highlight-code slot="codeText" lang="html">
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
  </highlight-code>
</demo-block>
