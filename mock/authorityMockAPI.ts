const authorityList = ['auth:read', 'auth:download'];

export default {
  // 店铺列表枚举值
  'GET /api/v3/fetchAuthority': (req: any, res: any) => {
    res.json({
      success: true,
      data: authorityList,
      code: 200,
      message: '',
      errMsg: '',
    });
  },
};
