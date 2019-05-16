---
title: 'Tag 标签'
---

## Tag 标签

<demo-block title="主题颜色" desc="使用 <code>type</code> 属性来改变标签的主题颜色，也可以通过 <code>color</code> 属性来自定义背景色。">
  <template slot="demoContent">
    <qb-tag>默认</qb-tag>
    <qb-tag type="success" style="margin-left:10px">成功</qb-tag>
    <qb-tag type="warning" style="margin-left:10px">警告</qb-tag>
    <qb-tag type="danger" style="margin-left:10px">危险</qb-tag>
    <qb-tag type="info" style="margin-left:10px">信息</qb-tag>
    <qb-tag color="#edd3ed" style="margin-left:10px">自定义</qb-tag>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-tag>默认</qb-tag>
    <qb-tag type="success">成功</qb-tag>
    <qb-tag type="warning">警告</qb-tag>
    <qb-tag type="danger">危险</qb-tag>
    <qb-tag type="info">信息</qb-tag>
    <qb-tag color="#edd3ed">自定义</qb-tag>
  </highlight-code>
</demo-block>

<demo-block title="边框描边" desc="使用 hit 属性来添加边框描边，这是一个 Boolean 属性。">
  <template slot="demoContent">
    <qb-tag style="margin-left:10px">默认无描边</qb-tag>
    <qb-tag hit style="margin-left:10px">添加描边</qb-tag>
    <qb-tag type="success" style="margin-left:10px">默认无描边</qb-tag>
    <qb-tag hit type="success" style="margin-left:10px">添加描边</qb-tag>
    <qb-tag type="danger" style="margin-left:10px">默认无描边</qb-tag>
    <qb-tag hit type="danger" style="margin-left:10px">添加描边</qb-tag>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-tag>默认</qb-tag>
    <qb-tag type="success">成功</qb-tag>
    <qb-tag type="warning">警告</qb-tag>
    <qb-tag type="danger">危险</qb-tag>
    <qb-tag type="info">信息</qb-tag>
    <qb-tag color="#edd3ed">自定义</qb-tag>
  </highlight-code>
</demo-block>

<demo-block title="可关闭" desc="使用 <code>closable</code> 属性来决定是否显示关闭按钮，这是一个 Boolean 值。">
  <template slot="demoContent">
    <qb-tag closable>默认</qb-tag>
    <qb-tag type="success" closable style="margin-left:10px">成功</qb-tag>
    <qb-tag type="warning" closable style="margin-left:10px">警告</qb-tag>
    <qb-tag type="danger" closable style="margin-left:10px">危险</qb-tag>
    <qb-tag type="info" closable style="margin-left:10px">信息</qb-tag>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-tag closable>默认</qb-tag>
    <qb-tag type="success" closable>成功</qb-tag>
    <qb-tag type="warning" closable>警告</qb-tag>
    <qb-tag type="danger" closable>危险</qb-tag>
    <qb-tag type="info" closable>信息</qb-tag>
  </highlight-code>
</demo-block>

<demo-block title="尺寸大小" desc="使用 <code>size</code> 属性来改变标签的大小，除默认尺寸外还有三种尺寸大小：<code>medium</code>、 <code>small</code> 、<code>mini</code>.">
  <template slot="demoContent">
    <qb-tag closable>默认尺寸</qb-tag>
    <qb-tag closable size="medium" style="margin-left:10px">medium 尺寸</qb-tag>
    <qb-tag closable size="small" style="margin-left:10px">small 尺寸</qb-tag>
    <qb-tag closable size="mini" style="margin-left:10px">mini 尺寸</qb-tag>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-tag closable>默认尺寸</qb-tag>
    <qb-tag closable size="medium">medium 尺寸</qb-tag>
    <qb-tag closable size="small">small 尺寸</qb-tag>
    <qb-tag closable size="mini">mini 尺寸</qb-tag>
  </highlight-code>
</demo-block>

### 参数

| 参数                | 说明             | 类型    | 可选值                      | 默认值 |
| ------------------- | ---------------- | ------- | --------------------------- | ------ |
| type                | 主题             | string  | success/info/warning/danger | —      |
| closable            | 是否可关闭       | boolean | —                           | false  |
| disable-transitions | 是否禁用渐变动画 | boolean | —                           | false  |
| hit                 | 是否有边框描边   | boolean | —                           | false  |
| color               | 背景色           | string  | —                           | —      |
| size                | 尺寸             | string  | medium / small / mini       | —      |
