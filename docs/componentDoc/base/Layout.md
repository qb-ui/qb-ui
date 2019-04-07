---
title: 'Layout 布局'
---

## Layout 布局

栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 `12栅格` 系统，也有采用 `8栅格` 系统的，但是随着设备屏幕越来越大，传统的 `12栅格` 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 `24栅格` 系统。也就是将页面区域 24 等分。

<demo-block title="基础布局" desc="通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。">
  <template slot="demoContent">
    <qb-row>
      <qb-col><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row>
      <qb-col :span="12"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="12"><grid-content bg3></grid-content></qb-col>
    </qb-row>
    <qb-row>
      <qb-col :span="8"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="8"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="8"><grid-content bg3></grid-content></qb-col>
    </qb-row>
    <qb-row>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row>
      <qb-col></qb-col>
    </qb-row>
    <qb-row>
      <qb-col :span="12"></qb-col>
      <qb-col :span="12"></qb-col>
    </qb-row>
    <qb-row>
      <qb-col :span="8"></qb-col>
      <qb-col :span="8"></qb-col>
      <qb-col :span="8"></qb-col>
    </qb-row>
    <qb-row>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="分栏间隔" desc="Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。">
  <template slot="demoContent">
    <qb-row :gutter="20">
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row :gutter="20"></qb-row>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
      <qb-col :span="4"></qb-col>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="混合布局" desc="通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。">
  <template slot="demoContent">
    <qb-row :gutter="20">
      <qb-col :span="16"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="8"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="8"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="8"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="5"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="14"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="5"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row :gutter="20">
      <qb-col :span="16"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="8"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="8"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="8"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="4"><grid-content bg3></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="5"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="14"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="5"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="分栏偏移" desc="使用 offset 来偏移指定的栏数。">
  <template slot="demoContent">
    <qb-row :gutter="24">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6" :offset="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="10" :offset="6"><grid-content bg3></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="6" :offset="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6" :offset="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row :gutter="24">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6" :offset="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="10" :offset="6"><grid-content bg3></grid-content></qb-col>
    </qb-row>
    <qb-row :gutter="20">
      <qb-col :span="6" :offset="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6" :offset="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="对齐方式" desc="通过 flex 布局来对分栏进行灵活的对齐。<br/>将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。">
  <template slot="demoContent">
    <qb-row type="flex">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="center">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="end">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="space-between">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="space-around">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row type="flex">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="center">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="end">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="space-between">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
    <qb-row type="flex" justify="space-around">
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg3></grid-content></qb-col>
      <qb-col :span="6"><grid-content bg2></grid-content></qb-col>
    </qb-row>
  </highlight-code>
</demo-block>

<demo-block title="响应式布局" desc="参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。">
  <template slot="demoContent">
    <qb-row :gutter="20">
      <qb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><grid-content bg2></grid-content></qb-col>
      <qb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><grid-content bg3></grid-content></qb-col>
      <qb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><grid-content bg2></grid-content></qb-col>
      <qb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><grid-content bg3></grid-content></qb-col>
    </qb-row>
  </template>

  <highlight-code slot="codeText" lang="html">
    <qb-row :gutter="20">
      <qb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><grid-content bg2></grid-content></qb-col>
      <qb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><grid-content bg3></grid-content></qb-col>
      <qb-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><grid-content bg2></grid-content></qb-col>
      <qb-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><grid-content bg3></grid-content></qb-col>
    </qb-row>
  </highlight-code>
</demo-block>

### 参数说明

**Row 组件参数**

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | top    |
| tag     | 自定义元素标签                        | string | \*                                          | div    |

**Col 组件参数**

| 参数   | 说明                                 | 类型                                        | 可选值 | 默认值 |
| ------ | ------------------------------------ | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                       | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                   | number                                      | —      | 0      |
| push   | 栅格向右移动格数                     | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                     | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| tag    | 自定义元素标签                       | string                                      | \*     | div    |
