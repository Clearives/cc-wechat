export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/product/income',
      },
      {
        path: '/product/income',
        component: './product/income',
        name: 'analysis',
      },
      {
        path: '/product/inout',
        component: './product/inout',
        name: 'inout',
      },
      {
        path: '/product/list',
        component: './product/list',
        name: 'monitor',
      },
    ],
  },
];
