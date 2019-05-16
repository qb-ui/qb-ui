---
title: 'Button 按钮'
---

## Button 按钮

按钮组件。

<demo-block title="基础用法" desc="使用 <code>type</code> 属性来改变按钮的背景色。按钮默认是白色背景，<code>type</code> 值为 <code>default</code>。">
  <template slot="demoContent">
    <qb-row>
      <qb-button>默认按钮</qb-button>
      <qb-button type="primary">主要按钮</qb-button>
      <qb-button type="success">成功按钮</qb-button>
      <qb-button type="info">信息按钮</qb-button>
      <qb-button type="warning">警告按钮</qb-button>
      <qb-button type="danger">危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button plain>朴素按钮</qb-button>
      <qb-button type="primary" plain>主要按钮</qb-button>
      <qb-button type="success" plain>成功按钮</qb-button>
      <qb-button type="info" plain>信息按钮</qb-button>
      <qb-button type="warning" plain>警告按钮</qb-button>
      <qb-button type="danger" plain>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button round>圆角按钮</qb-button>
      <qb-button type="primary" round>主要按钮</qb-button>
      <qb-button type="success" round>成功按钮</qb-button>
      <qb-button type="info" round>信息按钮</qb-button>
      <qb-button type="warning" round>警告按钮</qb-button>
      <qb-button type="danger" round>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button circle>圆</qb-button>
      <qb-button type="primary" circle>形</qb-button>
      <qb-button type="success" circle>按</qb-button>
      <qb-button type="info" circle>钮</qb-button>
      <qb-button type="primary" circle icon="qb-icon-rotate-ccw"></qb-button>
      <qb-button type="danger" circle icon="qb-icon-trash-2"></qb-button>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button>默认按钮</qb-button>
      <qb-button type="primary">主要按钮</qb-button>
      <qb-button type="success">成功按钮</qb-button>
      <qb-button type="info">信息按钮</qb-button>
      <qb-button type="warning">警告按钮</qb-button>
      <qb-button type="danger">危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button plain>朴素按钮</qb-button>
      <qb-button type="primary" plain>主要按钮</qb-button>
      <qb-button type="success" plain>成功按钮</qb-button>
      <qb-button type="info" plain>信息按钮</qb-button>
      <qb-button type="warning" plain>警告按钮</qb-button>
      <qb-button type="danger" plain>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button round>圆角按钮</qb-button>
      <qb-button type="primary" round>主要按钮</qb-button>
      <qb-button type="success" round>成功按钮</qb-button>
      <qb-button type="info" round>信息按钮</qb-button>
      <qb-button type="warning" round>警告按钮</qb-button>
      <qb-button type="danger" round>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button circle>圆</qb-button>
      <qb-button type="primary" circle>形</qb-button>
      <qb-button type="success" circle>按</qb-button>
      <qb-button type="info" circle>钮</qb-button>
      <qb-button type="primary" circle icon="qb-icon-rotate-ccw"></qb-button>
      <qb-button type="danger" circle icon="qb-icon-trash-2"></qb-button>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="文字按钮" desc="没有边框和背景色的按钮。此时 <code>type</code> 值为 <code>text</code>。">
  <template slot="demoContent">
    <qb-row>
      <qb-button type="text">文字按钮</qb-button>
      <qb-button type="text" disabled>文字按钮</qb-button>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button type="text">文字按钮</qb-button>
      <qb-button type="text" disabled>文字按钮</qb-button>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="禁用状态" desc="使用 <code>disabled</code> 属性来定义按钮是否可用，它接受一个 Boolean 值。">
  <template slot="demoContent">
    <qb-row>
      <qb-button>默认按钮</qb-button>
      <qb-button type="primary" disabled>主要按钮</qb-button>
      <qb-button type="success" disabled>成功按钮</qb-button>
      <qb-button type="info" disabled>信息按钮</qb-button>
      <qb-button type="warning" disabled>警告按钮</qb-button>
      <qb-button type="danger" disabled>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button plain>朴素按钮</qb-button>
      <qb-button type="primary" plain disabled>主要按钮</qb-button>
      <qb-button type="success" plain disabled>成功按钮</qb-button>
      <qb-button type="info" plain disabled>信息按钮</qb-button>
      <qb-button type="warning" plain disabled>警告按钮</qb-button>
      <qb-button type="danger" plain disabled>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button round>圆角按钮</qb-button>
      <qb-button type="primary" round disabled>主要按钮</qb-button>
      <qb-button type="success" round disabled>成功按钮</qb-button>
      <qb-button type="info" round disabled>信息按钮</qb-button>
      <qb-button type="warning" round disabled>警告按钮</qb-button>
      <qb-button type="danger" round disabled>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button circle>圆</qb-button>
      <qb-button type="primary" circle disabled>形</qb-button>
      <qb-button type="success" circle disabled>按</qb-button>
      <qb-button type="info" circle disabled>钮</qb-button>
      <qb-button type="primary" circle disabled icon="qb-icon-rotate-ccw"></qb-button>
      <qb-button type="danger" circle disabled icon="qb-icon-trash-2"></qb-button>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button>默认按钮</qb-button>
      <qb-button type="primary" disabled>主要按钮</qb-button>
      <qb-button type="success" disabled>成功按钮</qb-button>
      <qb-button type="info" disabled>信息按钮</qb-button>
      <qb-button type="warning" disabled>警告按钮</qb-button>
      <qb-button type="danger" disabled>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button plain>朴素按钮</qb-button>
      <qb-button type="primary" plain disabled>主要按钮</qb-button>
      <qb-button type="success" plain disabled>成功按钮</qb-button>
      <qb-button type="info" plain disabled>信息按钮</qb-button>
      <qb-button type="warning" plain disabled>警告按钮</qb-button>
      <qb-button type="danger" plain disabled>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button round>圆角按钮</qb-button>
      <qb-button type="primary" round disabled>主要按钮</qb-button>
      <qb-button type="success" round disabled>成功按钮</qb-button>
      <qb-button type="info" round disabled>信息按钮</qb-button>
      <qb-button type="warning" round disabled>警告按钮</qb-button>
      <qb-button type="danger" round disabled>危险按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button circle>圆</qb-button>
      <qb-button type="primary" circle disabled>形</qb-button>
      <qb-button type="success" circle disabled>按</qb-button>
      <qb-button type="info" circle disabled>钮</qb-button>
      <qb-button type="primary" circle disabled icon="qb-icon-rotate-ccw"></qb-button>
      <qb-button type="danger" circle disabled icon="qb-icon-trash-2"></qb-button>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="加载中" desc="点击按钮后进行数据加载操作，在按钮上显示加载状态。<br>使用 <code>loading</code> 属性来改变按钮的加载状态，它接受一个 Boolean 值。">
  <template slot="demoContent">
    <qb-row>
      <qb-button type="primary" loading>加载中</qb-button>
      <qb-button type="primary" loading></qb-button>
      <qb-button type="primary" loading circle></qb-button>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button type="primary" loading>加载中</qb-button>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="不同尺寸" desc="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。<br><code>size</code> 属性用来改变按钮的尺寸大小，除默认值外还有三个可选值：<code>medium</code> 、<code>small</code>、<code>mini</code>。">
  <template slot="demoContent">
    <qb-row>
      <qb-button>默认按钮</qb-button>
      <qb-button size="medium">中等按钮</qb-button>
      <qb-button size="small">小型按钮</qb-button>
      <qb-button size="mini">mini按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button round>默认按钮</qb-button>
      <qb-button size="medium" round>中等按钮</qb-button>
      <qb-button size="small" round>小型按钮</qb-button>
      <qb-button size="mini" round>mini按钮</qb-button>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button>默认按钮</qb-button>
      <qb-button size="medium">中等按钮</qb-button>
      <qb-button size="small">小型按钮</qb-button>
      <qb-button size="mini">mini 按钮</qb-button>
    </qb-row>
    <qb-row>
      <qb-button round>默认按钮</qb-button>
      <qb-button size="medium" round>中等按钮</qb-button>
      <qb-button size="small" round>小型按钮</qb-button>
      <qb-button size="mini" round>mini 按钮</qb-button>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="图标按钮" desc="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。<br>通过添加<code>icon</code>属性来为按钮添加图标，可用的图标名称请参考 <a href='./Icon.html'>图标字体</a> 一节。">
  <template slot="demoContent">
    <qb-row>
      <qb-button icon="qb-icon-dollar-sign"></qb-button>
      <qb-button icon="qb-icon-link-2" type="primary"></qb-button>
      <qb-button icon="qb-icon-check-circle" type="success"></qb-button>
      <qb-button icon="qb-icon-activity" type="danger"></qb-button>
      <qb-button icon="qb-icon-search" type="primary">搜索</qb-button>
      <qb-button icon="qb-icon-trash-2" type="primary">删除</qb-button>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button icon="qb-icon-dollar-sign" type="primary"></qb-button>
      <qb-button icon="qb-icon-link-2" type="primary"></qb-button>
      <qb-button icon="qb-icon-check-circle" type="success"></qb-button>
      <qb-button icon="qb-icon-activity" type="danger"></qb-button>
      <qb-button icon="qb-icon-search" type="primary">搜索</qb-button>
      <qb-button icon="qb-icon-trash-2" type="primary">删除</qb-button>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="按钮组" desc="有多项类似操作并列出现时，可使用按钮组的方式来布局。">
  <template slot="demoContent">
    <qb-row>
      <qb-button-group>
        <qb-button type="primary">选项一</qb-button>
        <qb-button type="primary">选项二</qb-button>
        <qb-button type="primary">选项三</qb-button>
      </qb-button-group>
      <qb-button-group style="margin-left:10px">
        <qb-button icon="qb-icon-arrow-left" size="small"></qb-button>
        <qb-button icon="qb-icon-arrow-right" size="small"></qb-button>
      </qb-button-group>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-button-group>
        <qb-button type="primary">选项一</qb-button>
        <qb-button type="primary">选项二</qb-button>
        <qb-button type="primary">选项三</qb-button>
      </qb-button-group>
    </qb-row>
  </highlight-code>
</demo-block>

### 参数说明

| 参数     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info / text | —     |
| disabled | 是否禁用状态   | boolean | —                                                 | false  |
| plain    | 是否朴素按钮   | boolean | —                                                 | false  |
| round    | 是否圆角按钮   | boolean | —                                                 | false  |
| circle   | 是否圆形按钮   | boolean | —                                                 | false  |
| loading  | 是否加载中状态 | boolean | —                                                 | false  |
| size     | 按钮大小       | string  | medium/small/mini                                 | —     |
| icon     | 图标类名       | string  | —                                                 | —     |