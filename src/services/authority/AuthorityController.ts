/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';

export async function fetchUserRole(params = {}) {
  return request('/api/v3/fetchAuthority', {
    method: 'GET',
    data: { ...params },
  });
}
