import servicesOrder from '@/services/order';
const { getStoreEnums, getProvinceEnums, getCarrierEnums, getBrandEnums } =
  servicesOrder.OrderController;

/**
 * @description: 店铺模糊查询
 * @param {any} params
 */
const requestStoreEnums = async (params: any) => {
  try {
    const resData = await getStoreEnums({ shopName: params?.keyWords });
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
    const resData = await getBrandEnums({
      brandName: params?.keyWords,
      pageNum: 0,
      pageSize: 500,
    });
    return (resData?.content || []).map((item: any) => ({
      value: item.id,
      label: item.name,
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
    const resData = await getCarrierEnums({
      carrierName: params.keyWords,
    });
    return (resData || []).map((item: any) => ({
      value: item?.carrierName,
      label: item?.carrierName,
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
