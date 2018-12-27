// https://umijs.org/config/
import pageRoutes from './router.config';

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: true,
    title: 'client2',
    dll: false,
    hardSource: false,
    routes: {
      exclude: [
        /components/,
      ],
    },
  }],
]


export default {
  // add for transfer to umi
  plugins,
  define: {
    // APP_TYPE: process.env.APP_TYPE || '',
  },
  targets: {
    ie: 11,
  },
  // 路由配置
  routes: pageRoutes,
  externals: {
    // '@antv/data-set': 'DataSet',
  },
  proxy: {
    '/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/': '' },
    },
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  manifest: {
    basePath: '/',
  }
};
