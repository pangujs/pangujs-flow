import { defineConfig } from 'umi';
import { version } from './package.json';

export default defineConfig({
  title: '模型编辑器',
  define: {
    VERSION: `v${version}`,
  },
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/component/loading',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  theme: {
    '@ant-prefix': 'ant',
    '@menu-item-active-bg': '#f0f5ff',
  },
  mfsu: {},
  fastRefresh: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@antv/x6-react-components',
        libraryDirectory: 'es', // es or lib
        style: true,
        transformToDefaultImport: false,
      },
    ],
  ],
});
