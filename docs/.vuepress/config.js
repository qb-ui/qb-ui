module.exports = {
  title: 'qb-ui',
  description: '自定义 Vue 组件库',
  dest: './dist',
  port: 8081,
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
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/Button.md'
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: []
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: []
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: []
        }
      ]
    }
  }
}