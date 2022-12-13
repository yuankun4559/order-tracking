import { defineConfig } from '@umijs/max';
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
    title: '订单履约',
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
});
