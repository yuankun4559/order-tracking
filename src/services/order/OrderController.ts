/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！
import { request } from '@umijs/max';
const APP_PRE = 'fulfillment-110';
const AP_PRODUCT_PRE = 'product';

// 查询订单列表
export async function queryOrderList(params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/fulfillment-order/list`, {
    method: 'POST',
    data: params,
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
  return request(`${REACT_BASE_URL}/${APP_PRE}/fulfillment-order/export`, {
    method: 'POST',
    data: { ...params },
  });
}

//
export async function uploadContractUrl() {
  return `${REACT_BASE_URL}/${APP_PRE}/fulfillment-order/export`;
}

// 模糊查询店铺列表
export async function getStoreEnums(params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/shop/info/list`, {
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

// 获取品牌数据数据
export async function getBrandEnums(params = {}) {
  return request(`${REACT_BASE_URL}/${AP_PRODUCT_PRE}/brand/search`, {
    method: 'GET',
    params,
  });
}

// 查询 履约订单单量分布 （面板-节点信息）
export async function getOrderDistribution(params = {}) {
  return request(
    `${REACT_BASE_URL}/${APP_PRE}/fulfillment-order/hanging-status-distribution`,
    {
      method: 'POST',
      data: { ...params },
    },
  );
}

// 查询 履约订单时效监控 （面板-卡片信息）
export async function getOrderPrescription(params = {}) {
  return request(
    `${REACT_BASE_URL}/${APP_PRE}/fulfillment-order/early-warning-info`,
    {
      method: 'POST',
      data: { ...params },
    },
  );
}

export async function getAlertGraph(url = '', params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/${url}`, {
    method: 'POST',
    data: { ...params },
  });
}

export async function alertGraphMock(url = '', params = {}) {
  return request(`${url}`, {
    method: 'POST',
    data: { ...params },
  });
}

// 获取卡片规则数据
export async function getRulesData(url = '', params = {}) {
  return request(`${REACT_BASE_URL}/${APP_PRE}/early-warning/info/list`, {
    method: 'GET',
    data: { ...params },
  });
}
