/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';
const APP_PRE = 'fulfillment-110';

export async function queryOrderList(params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/fulfillment-sub-order-list`, {
    method: 'GET',
    params: { ...params },
  });
}

export async function queryOrderDetailList(params = {}) {
  return request(
    `${REACT_BASE_URL}/${APP_PRE}/fulfillment-sub-order-detail-list`,
    {
      method: 'GET',
      params,
    },
  );
}

export async function exportData(params = {}) {
  return request(
    `${REACT_BASE_URL}/${APP_PRE}/fulfillment-sub-order-detail/export`,
    {
      method: 'GET',
      params,
    },
  );
}
