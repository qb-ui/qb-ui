---
title: 'Button 按钮'
---

## Button 按钮

常用的操作按钮。

<demo-block title="基础用法">
  <template slot="demoContent">
    <div>
      <qb-button>默认按钮</qb-button>
      <qb-button type="primary">主要按钮</qb-button>
      <qb-button type="success">成功按钮</qb-button>
      <qb-button type="info">信息按钮</qb-button>
      <qb-button type="warning">警告按钮</qb-button>
      <qb-button type="danger">危险按钮</qb-button>
    </div>
    <div>
      <qb-button plain>朴素按钮</qb-button>
      <qb-button type="primary" plain>主要按钮</qb-button>
      <qb-button type="success" plain>成功按钮</qb-button>
      <qb-button type="info" plain>信息按钮</qb-button>
      <qb-button type="warning" plain>警告按钮</qb-button>
      <qb-button type="danger" plain>危险按钮</qb-button>
    </div>
    <div>
      <qb-button round>圆角按钮</qb-button>
      <qb-button type="primary" round>主要按钮</qb-button>
      <qb-button type="success" round>成功按钮</qb-button>
      <qb-button type="info" round>信息按钮</qb-button>
      <qb-button type="warning" round>警告按钮</qb-button>
      <qb-button type="danger" round>危险按钮</qb-button>
    </div>
    <div>
      <qb-button circle>圆</qb-button>
      <qb-button type="primary" circle>角</qb-button>
      <qb-button type="success" circle>按</qb-button>
      <qb-button type="info" circle>钮</qb-button>
      <qb-button type="warning" circle>圆</qb-button>
      <qb-button type="danger" circle>圆</qb-button>
    </div>
  </template>

  <highlight-code slot="codeText" lang="html">
    <div>
      <qb-button>默认按钮</qb-button>
      <qb-button type="primary">主要按钮</qb-button>
      <qb-button type="success">成功按钮</qb-button>
      <qb-button type="info">信息按钮</qb-button>
      <qb-button type="warning">警告按钮</qb-button>
      <qb-button type="danger">危险按钮</qb-button>
    </div>
    <div>
      <qb-button plain>朴素按钮</qb-button>
      <qb-button type="primary" plain>主要按钮</qb-button>
      <qb-button type="success" plain>成功按钮</qb-button>
      <qb-button type="info" plain>信息按钮</qb-button>
      <qb-button type="warning" plain>警告按钮</qb-button>
      <qb-button type="danger" plain>危险按钮</qb-button>
    </div>
    <div>
      <qb-button round>圆角按钮</qb-button>
      <qb-button type="primary" round>主要按钮</qb-button>
      <qb-button type="success" round>成功按钮</qb-button>
      <qb-button type="info" round>信息按钮</qb-button>
      <qb-button type="warning" round>警告按钮</qb-button>
      <qb-button type="danger" round>危险按钮</qb-button>
    </div>
    <div>
      <qb-button circle>圆</qb-button>
      <qb-button type="primary" circle>角</qb-button>
      <qb-button type="success" circle>按</qb-button>
      <qb-button type="info" circle>钮</qb-button>
      <qb-button type="warning" circle>圆</qb-button>
      <qb-button type="danger" circle>圆</qb-button>
    </div>
  </highlight-code>
</demo-block>

### 参数说明

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —     |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —     |
| plain       | 是否朴素按钮   | boolean | —                                                 | false  |
| round       | 是否圆角按钮   | boolean | —                                                 | false  |
| circle      | 是否圆形按钮   | boolean | —                                                 | false  |
| loading     | 是否加载中状态 | boolean | —                                                 | false  |
| disabled    | 是否禁用状态   | boolean | —                                                 | false  |
| icon        | 图标类名       | string  | —                                                 | —     |
| autofocus   | 是否默认聚焦   | boolean | —                                                 | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |