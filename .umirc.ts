import { defineConfig } from '@umijs/max';
const path = require('path');
import routes from './src/routes';

const env = process.env.UMI_ENV as string;

const REACT_BASE_URL = {
  dev: 'http://dev.nagy.ruigushop.com',
  test: 'http://test.nagy.ruigushop.com',
  // test: 'http://172.16.24.101:9202',
  uat: 'http://uat.nagy.ruigushop.com',
  prod: '//rbox.ruigushop.com',
}[env];

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes,
  layout: {
    title: '',
    siderWidth: 180,
    defaultCollapsed: true,
  },
  npmClient: 'yarn',
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  define: {
    REACT_BASE_URL,
  },
  fastRefresh: true,
  mfsu: {},
  chainWebpack(config) {
    config.module
      .rule('less')
      .test(/\.less$/)
      .oneOf('css')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve(__dirname, './src/assets/styles/variable.less'),
      })
      .end();
  },
});
