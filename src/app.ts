// 运行时配置
import type { RequestConfig, RuntimeConfig } from '@umijs/max';
import { message } from 'antd';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState() {
  return {};
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    siderWidth: 180,
    defaultCollapsed: false,
    menu: {
      locale: false,
      hideMenuWhenCollapsed: true,
    },
  };
};

export const request: RequestConfig = {
  timeout: 5000,
  timeoutErrorMessage: '请求超时',
  headers: {
    Authorization: localStorage.getItem('TOKEN') || '',
  },
  requestInterceptors: [],
  responseInterceptors: [
    [
      // @ts-ignore
      (res) => {
        // @ts-ignore
        if (res?.data?.code !== 200) {
          // @ts-ignore
          message.error(res?.data?.message || 'ERROR');
        }
        return res?.data;
      },
      (err: any) => {
        message.error(err.message);
        return Promise.reject(err);
      },
    ],
  ],
};
