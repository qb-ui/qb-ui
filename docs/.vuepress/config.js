module.exports = {
  title: 'qb-ui',
  description: '一个 Vue 组件库',
  // dest: '.vuepress/dist',
  port: 8081,
  base: '/qb-ui/',
  repo: 'https://github.com/qb-ui/qb-ui',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
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
    sidebarDepth: 0,
    sidebar: {
      '/componentDoc/': [{
          title: '使用指南',
        collapsable: false,
          children: [
            'guide/installion.md',
            'guide/quickstart.md',
            'guide/transition.md'
          ]
        }, 
        {
          title: '基本组件',
          collapsable: false,
          children: [
            'base/BaseLayout.md',
            'base/BaseIcon.md',
            'base/BaseButton.md',
            'base/BaseTag.md'
          ]
        },
        {
          title: '表单类组件',
          collapsable: false,
          children: []
        },
        {
          title: '弹窗类组件',
          collapsable: false,
          children: []
        },
        {
          title: '导航类组件',
          collapsable: false,
          children: []
        }
      ]
    }
  }
}
