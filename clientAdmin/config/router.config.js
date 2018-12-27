export default [
  {
    path: '/product',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/product/income', component: './product/income', name: 'income' },
      { path: '/product/list', component: './product/list', name: 'list' },
    ],
  },
];
