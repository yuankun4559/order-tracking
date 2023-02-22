const users = [
  {
    id: '1',
    name: 'Umi',
    nickName: 'U',
    gender: 'MALE',
    orderType: 1,
    orderCreateDate: '2022-10-10 10:22:19',
    cumulativeFulfillmentTimeConsuming: 390,
    hangUpStatus: 1,
  },
  {
    id: '2',
    name: 'Fish',
    nickName: 'B',
    gender: 'FEMALE',
    orderType: 4,
    orderCreateDate: '2022-11-01 23:59:19',
    cumulativeFulfillmentTimeConsuming: 58,
    hangUpStatus: 2,
  },
  {
    id: '3',
    name: 'Fish',
    nickName: 'B',
    gender: 'FEMALE',
    orderType: 4,
    orderCreateDate: '2022-11-01 23:59:19',
    cumulativeFulfillmentTimeConsuming: 58,
    hangUpStatus: 8,
  },
];

const enumsMap = [
  {
    shopId: 12,
    shopName: '禅机生气店铺',
  },
  {
    shopId: 13,
    shopName: '时间就是店铺',
  },
  {
    shopId: 14,
    shopName: '我是一个店铺',
  },
  {
    shopId: 15,
    shopName: '供应商店铺1',
  },
  {
    shopId: 16,
    shopName: '锐锢店铺22',
  },
];

const carrierNameMap = [
  '我是一个承运商',
  '承运商aaa',
  '承运商bbb',
  '承运商ccc',
];

const brandMap = [
  {
    brandId: 12,
    brandName: '禅机生气店铺',
  },
  {
    brandId: 13,
    brandName: '时间就是店铺',
  },
  {
    brandId: 14,
    brandName: '我是一个店铺',
  },
  {
    brandId: 15,
    brandName: '供应商店铺1',
  },
  {
    brandId: 16,
    brandName: '锐锢店铺22',
  },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { content: [...users], totalElements: 3 },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
  // 店铺列表枚举值
  'GET /api/v3/storeEnums': (req: any, res: any) => {
    const {
      query: { shopName },
    } = req;
    res.json({
      success: true,
      data:
        shopName && enumsMap.filter((i) => i.shopName.indexOf(shopName) > -1),
      code: 200,
      message: '',
      errMsg: '',
    });
  },
  'GET /api/v3/carrierEnums': (req: any, res: any) => {
    const {
      query: { carrierName },
    } = req;
    res.json({
      success: true,
      data:
        carrierName &&
        carrierNameMap.filter((i) => i.indexOf(carrierName) > -1),
      code: 200,
      message: '',
      errMsg: '',
    });
  },
  'GET /api/v3/brandEnums': (req: any, res: any) => {
    const {
      query: { brandName },
    } = req;
    res.json({
      success: true,
      data:
        brandName &&
        brandMap.filter((i) => i.brandName.indexOf(brandName) > -1),
      code: 200,
      message: '',
      errMsg: '',
    });
  },
};
