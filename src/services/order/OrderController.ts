/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';
const APP_PRE = 'fulfillment-110';

// 查询订单列表
export async function queryOrderList(params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/fulfillment-sub-order-list`, {
    method: 'GET',
    params: { ...params },
  });
}

// 查询订单下sku列表
export async function queryOrderDetailList(params = {}) {
  return request(
    `${REACT_BASE_URL}/${APP_PRE}/fulfillment-sub-order-detail-list`,
    {
      method: 'GET',
      params,
    },
  );
}

// 导出订单列表数据
export async function exportData(params = {}) {
  return request(
    `${REACT_BASE_URL}/${APP_PRE}/fulfillment-sub-order-detail/export`,
    {
      method: 'GET',
      params,
    },
  );
}

// 模糊查询店铺列表
export async function getStoreEnums(params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/shop/info/list`, {
    method: 'GET',
    params,
  });
}

// 模糊查询店铺列表 -- mock
export async function getStoreEnumsMock(params = {}) {
  return request(`api/v3/storeEnums`, {
    method: 'GET',
    params,
  });
}

// 获取省市区数据
export async function getProvinceEnums(params = {}) {
  return request(
    `${REACT_BASE_URL}/metadata/system/address/provinces/cities/regions`,
    {
      method: 'GET',
      params,
    },
  );
}

// 获取承运商数据数据
export async function getCarrierEnums(params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/carrier/info/list`, {
    method: 'GET',
    params,
  });
}

// 获取承运商数据数据 -- mock
export async function getCarrierEnumsMock(params = {}) {
  return request(`api/v3/carrierEnums`, {
    method: 'GET',
    params,
  });
}

// 获取品牌数据数据 -- mock
export async function getBrandEnumsMock(params = {}) {
  return request(`api/v3/brandEnums`, {
    method: 'GET',
    params,
  });
}
