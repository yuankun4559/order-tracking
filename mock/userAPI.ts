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
};
