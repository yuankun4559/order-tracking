import servicesOrder from '@/services/order';
const {
  queryOrderList,
  queryOrderDetailList,
  exportData,
  getStoreEnumsMock,
  getProvinceEnums,
  getCarrierEnumsMock,
  getBrandEnumsMock,
} = servicesOrder.OrderController;

/**
 * @description: 店铺模糊查询
 * @param {any} params
 */
const requestStoreEnums = async (params: any) => {
  try {
    const resData = await getStoreEnumsMock({ shopName: params?.keyWords });
    return (resData || []).map((item: any) => ({
      value: item.shopId,
      label: item.shopName,
    }));
  } catch (error) {
    return [];
  }
};

/**
 * @description: 品牌模糊查询
 * @param {any} params
 */
const requestBrandEnums = async (params: any) => {
  try {
    const resData = await getBrandEnumsMock({
      brandName: params?.keyWords,
      pageNum: 0,
      pageSize: 50,
    });
    return (resData || []).map((item: any) => ({
      value: item.brandId,
      label: item.brandName,
    }));
  } catch (error) {
    return [];
  }
};

/**
 * @description: 获取省市区数据
 */
const requestProvinceEnums = async () => {
  try {
    const resData = await getProvinceEnums();
    return resData || [];
  } catch (error) {
    return [];
  }
};

/**
 * @description: 获取承运商数据
 * @param {any} params
 */
const requestCarrierEnums = async (params: any) => {
  try {
    const resData = await getCarrierEnumsMock({
      carrierName: params.keyWords,
    });
    return (resData || []).map((item: string) => ({
      value: item,
      label: item,
    }));
  } catch (error) {
    return [];
  }
};

export {
  requestCarrierEnums,
  requestProvinceEnums,
  requestBrandEnums,
  requestStoreEnums,
};
