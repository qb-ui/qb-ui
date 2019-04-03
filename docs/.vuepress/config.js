module.exports = {
  title: 'qb-ui',
  description: '一个 Vue 组件库',
  dest: './dist',
  port: 8081,
  base: '/qb-ui/',
  repo: 'https://github.com/qb-ui/qb-ui',
  themeConfig: {
    // 添加导航栏
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '文档',
        link: '/componentDoc/'
      },
      {
        text: 'github',
        link: 'https://github.com/wmaqingbo/qb-ui/'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/componentDoc/': [{
          title: '基本组件',
          collapsable: true,
          children: [
            'base/Button.md'
          ]
        },
        {
          title: '表单类组件',
          collapsable: true,
          children: []
        },
        {
          title: '弹窗类组件',
          collapsable: true,
          children: []
        },
        {
          title: '导航类组件',
          collapsable: true,
          children: []
        }
      ]
    }
  }
}