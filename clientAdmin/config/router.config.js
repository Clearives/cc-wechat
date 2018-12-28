export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/product/intro',
      },
      {
        path: '/product',
        name: '项目',
        icon: 'dashboard',
        routes: [
          {
            path: '/product/intro',
            component: './product/intro',
            name: '介绍',
          },
          {
            path: '/product/income',
            component: './product/income',
            name: '管理',
          },
          {
            path: '/product/list',
            component: './product/list',
            name: '列表',
          },
        ]
      },
      {
        path: '/github',
        name: 'Github',
        icon: 'github',
        routes: [
          {
            path: '/github/profile',
            component: './github/profile',
            name: '主页',
          },
          {
            path: '/github/repo',
            component: './product/income',
            name: '仓库',
          },
          {
            path: '/github/issue',
            component: './product/intro',
            name: '文章',
          },
        ]
      },
    ],
  },
];
