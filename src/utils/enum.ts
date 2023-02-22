interface IOrderStatus {
  status: string;
  name: string;
  color: string;
  bgColor?: string;
}

interface IOrderType {
  label: string;
  value: string;
}

// 订单类型
const ORDER_HUANG_TYPE = {
  1: {
    key: '1',
    text: '待支付',
  },
  2: {
    key: '2',
    text: 'OMS待下发',
  },
  3: {
    key: '3',
    text: '待店铺接单',
  },
  4: {
    key: '4',
    text: '等待占库中',
  },
  5: {
    key: '5',
    text: '疫情拦截',
  },
  6: {
    key: '6',
    text: '延期发货',
  },
  7: {
    key: '7',
    text: '出库拦截',
  },
  8: {
    key: '8',
    text: 'ODS挂起',
  },
  9: {
    key: '9',
    text: '出库中',
  },
  10: {
    key: '10',
    text: '待发货',
  },
  11: {
    key: '11',
    text: '待揽件',
  },
  12: {
    key: '12',
    text: '待入分仓',
  },
  13: {
    key: '13',
    text: '待出分仓',
  },
  14: {
    key: '14',
    text: '运输中',
  },
  15: {
    key: '15',
    text: '待签收',
  },
  16: {
    key: '16',
    text: '已签收',
  },
};

// 订单类型+颜色
const ORDER_HUANG_STATUS: IOrderStatus[] = [
  {
    status: ORDER_HUANG_TYPE[1]['key'],
    name: ORDER_HUANG_TYPE[1]['text'],
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  }, // 蓝
  {
    status: ORDER_HUANG_TYPE[2]['key'],
    name: ORDER_HUANG_TYPE[2]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[3]['key'],
    name: ORDER_HUANG_TYPE[3]['text'],
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  }, // 红
  {
    status: ORDER_HUANG_TYPE[4]['key'],
    name: ORDER_HUANG_TYPE[4]['text'],
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  }, // 红
  {
    status: ORDER_HUANG_TYPE[5]['key'],
    name: ORDER_HUANG_TYPE[5]['text'],
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  }, // 红
  {
    status: ORDER_HUANG_TYPE[6]['key'],
    name: ORDER_HUANG_TYPE[6]['text'],
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  }, // 蓝
  {
    status: ORDER_HUANG_TYPE[7]['key'],
    name: ORDER_HUANG_TYPE[7]['text'],
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  }, // 红
  {
    status: ORDER_HUANG_TYPE[8]['key'],
    name: ORDER_HUANG_TYPE[8]['text'],
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  }, // 红
  {
    status: ORDER_HUANG_TYPE[9]['key'],
    name: ORDER_HUANG_TYPE[9]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[10]['key'],
    name: ORDER_HUANG_TYPE[10]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[11]['key'],
    name: ORDER_HUANG_TYPE[11]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[12]['key'],
    name: ORDER_HUANG_TYPE[12]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[13]['key'],
    name: ORDER_HUANG_TYPE[13]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[14]['key'],
    name: ORDER_HUANG_TYPE[14]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[15]['key'],
    name: ORDER_HUANG_TYPE[15]['text'],
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: ORDER_HUANG_TYPE[16]['key'],
    name: ORDER_HUANG_TYPE[16]['text'],
    color: 'rgba(82,196,26,1)',
    bgColor: 'rgba(82,196,26,.1)',
  }, // 绿
];

// sku状态
const ORDER_SKU_HUANG_TYPE = {
  1010: {
    key: '1010',
    text: '待支付',
  },
  1020: {
    key: '1020',
    text: 'OMS待下发',
  },
  1030: {
    key: '1030',
    text: '已占库',
  },
  1040: {
    key: '1040',
    text: '等待调拨',
  },
  1050: {
    key: '1050',
    text: '等待预售到货',
  },
  1060: {
    key: '1060',
    text: '无实物库存(超卖)',
  },
  1070: {
    key: '1070',
    text: '一品多供占库失败',
  },
  1080: {
    key: '1080',
    text: '待店铺接单',
  },
  1081: {
    key: '1081',
    text: '疫情拦截',
  },
  1090: {
    key: '1090',
    text: '延期发货',
  },
  1100: {
    key: '1100',
    text: '出库拦截',
  },
  1110: {
    key: '1110',
    text: '待下发仓库',
  },
  1120: {
    key: '1120',
    text: '已出库',
  },
  1130: {
    key: '1130',
    text: '待发货',
  },
  1131: {
    key: '1131',
    text: '出库中',
  },
  1140: {
    key: '1140',
    text: '待揽件',
  },
  1141: {
    key: '1141',
    text: '已揽件',
  },
  1150: {
    key: '1150',
    text: '待入分仓',
  },
  1160: {
    key: '1160',
    text: '待出分仓',
  },
  1170: {
    key: '1170',
    text: '运输中',
  }, // 面板用
  1200: {
    key: '1200',
    text: '运输中',
  },
  1205: {
    key: '1205',
    text: '到达网点',
  },
  1210: {
    key: '1210',
    text: '站点拒收',
  },
  1215: {
    key: '1215',
    text: '派送中',
  },
  1220: {
    key: '1220',
    text: '派送站点取出',
  },
  1225: {
    key: '1225',
    text: '派送站点签收',
  },
  1230: {
    key: '1230',
    text: '拒收带回',
  },
  1235: {
    key: '1235',
    text: '拒收带回撤销',
  },
  1240: {
    key: '1240',
    text: '部分签收',
  },
  1241: {
    key: '1241',
    text: '代收',
  },
  1245: {
    key: '1245',
    text: '派送异常',
  },
  1250: {
    key: '1250',
    text: '延迟派送',
  },
  1255: {
    key: '1255',
    text: '客户拒签',
  },
  1260: {
    key: '1260',
    text: '其他',
  },
  1265: {
    key: '1265',
    text: '疑难件',
  },
  1270: {
    key: '1270',
    text: '转投',
  },
  1275: {
    key: '1275',
    text: '退回',
  },
  1280: {
    key: '1280',
    text: '退回签收',
  },
  1285: {
    key: '1285',
    text: '滞留',
  },
  1286: {
    key: '1286',
    text: '取消',
  },
  1290: {
    key: '1290',
    text: '待签收',
  },
  1300: {
    key: '1300',
    text: '已签收',
  },
};

// sku状态+颜色
const ORDER_SKU_HUANG_STATUS: IOrderStatus[] = [
  {
    status: ORDER_SKU_HUANG_TYPE[1010]['key'],
    name: ORDER_SKU_HUANG_TYPE[1010]['text'],
    color: 'rgba(24,144,255,1)',
  }, // 蓝
  {
    status: ORDER_SKU_HUANG_TYPE[1020]['key'],
    name: ORDER_SKU_HUANG_TYPE[1020]['text'],
    color: 'rgba(24,144,255,1)',
  }, // 蓝
  {
    status: ORDER_SKU_HUANG_TYPE[1030]['key'],
    name: ORDER_SKU_HUANG_TYPE[1030]['text'],
    color: 'rgba(82,196,26,1)',
  }, // 绿
  {
    status: ORDER_SKU_HUANG_TYPE[1040]['key'],
    name: ORDER_SKU_HUANG_TYPE[1040]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1050]['key'],
    name: ORDER_SKU_HUANG_TYPE[1050]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1060]['key'],
    name: ORDER_SKU_HUANG_TYPE[1060]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1070]['key'],
    name: ORDER_SKU_HUANG_TYPE[1070]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1080]['key'],
    name: ORDER_SKU_HUANG_TYPE[1080]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1081]['key'],
    name: ORDER_SKU_HUANG_TYPE[1081]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1090]['key'],
    name: ORDER_SKU_HUANG_TYPE[1090]['text'],
    color: 'rgba(24,144,255,1)',
  }, // 蓝
  {
    status: ORDER_SKU_HUANG_TYPE[1100]['key'],
    name: ORDER_SKU_HUANG_TYPE[1100]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1110]['key'],
    name: ORDER_SKU_HUANG_TYPE[1110]['text'],
    color: 'rgba(255,24,24,1)',
  }, // 红
  {
    status: ORDER_SKU_HUANG_TYPE[1120]['key'],
    name: ORDER_SKU_HUANG_TYPE[1120]['text'],
    color: 'rgba(82,196,26,1)',
  }, // 绿 已出库
  {
    status: ORDER_SKU_HUANG_TYPE[1130]['key'],
    name: ORDER_SKU_HUANG_TYPE[1130]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1131]['key'],
    name: ORDER_SKU_HUANG_TYPE[1131]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1140]['key'],
    name: ORDER_SKU_HUANG_TYPE[1140]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1141]['key'],
    name: ORDER_SKU_HUANG_TYPE[1141]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1150]['key'],
    name: ORDER_SKU_HUANG_TYPE[1150]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1160]['key'],
    name: ORDER_SKU_HUANG_TYPE[1160]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1170]['key'],
    name: ORDER_SKU_HUANG_TYPE[1170]['text'],
    color: 'rgba(205,123,0,1)',
  }, // 仅履约看板用
  {
    status: ORDER_SKU_HUANG_TYPE[1200]['key'],
    name: ORDER_SKU_HUANG_TYPE[1200]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1205]['key'],
    name: ORDER_SKU_HUANG_TYPE[1205]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1210]['key'],
    name: ORDER_SKU_HUANG_TYPE[1210]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1215]['key'],
    name: ORDER_SKU_HUANG_TYPE[1215]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1220]['key'],
    name: ORDER_SKU_HUANG_TYPE[1220]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1225]['key'],
    name: ORDER_SKU_HUANG_TYPE[1225]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1230]['key'],
    name: ORDER_SKU_HUANG_TYPE[1230]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1235]['key'],
    name: ORDER_SKU_HUANG_TYPE[1235]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1240]['key'],
    name: ORDER_SKU_HUANG_TYPE[1240]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1241]['key'],
    name: ORDER_SKU_HUANG_TYPE[1241]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1245]['key'],
    name: ORDER_SKU_HUANG_TYPE[1245]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1250]['key'],
    name: ORDER_SKU_HUANG_TYPE[1250]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1255]['key'],
    name: ORDER_SKU_HUANG_TYPE[1255]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1260]['key'],
    name: ORDER_SKU_HUANG_TYPE[1260]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1265]['key'],
    name: ORDER_SKU_HUANG_TYPE[1265]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1270]['key'],
    name: ORDER_SKU_HUANG_TYPE[1270]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1275]['key'],
    name: ORDER_SKU_HUANG_TYPE[1275]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1280]['key'],
    name: ORDER_SKU_HUANG_TYPE[1280]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1285]['key'],
    name: ORDER_SKU_HUANG_TYPE[1285]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1286]['key'],
    name: ORDER_SKU_HUANG_TYPE[1286]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1290]['key'],
    name: ORDER_SKU_HUANG_TYPE[1290]['text'],
    color: 'rgba(205,123,0,1)',
  },
  {
    status: ORDER_SKU_HUANG_TYPE[1300]['key'],
    name: ORDER_SKU_HUANG_TYPE[1300]['text'],
    color: 'rgba(82,196,26,1)',
  },
];

// 订单类型
const ORDER_TYPES: IOrderType[] = [
  {
    label: '全部订单',
    value: '',
  },
  {
    label: 'R1',
    value: '1',
  },
  {
    label: 'R4',
    value: '4',
  },
  {
    label: 'R5',
    value: '5',
  },
];

// 订单渠道
const ORDER_CHANNEL = {
  1: {
    key: '1',
    text: '直销',
  },
  2: {
    key: '2',
    text: '企拍',
  },
};

// 履约仓
const WAREHOUSE_ENUM = {
  455: {
    key: '455',
    text: '华东仓',
  },
  1649: {
    key: '1649',
    text: '华中仓',
  },
  1878: {
    key: '1878',
    text: '华南仓',
  },
  2188: {
    key: '2188',
    text: '西南仓',
  },
};

export {
  ORDER_CHANNEL,
  ORDER_HUANG_TYPE,
  ORDER_HUANG_STATUS,
  ORDER_SKU_HUANG_TYPE,
  ORDER_SKU_HUANG_STATUS,
  ORDER_TYPES,
  WAREHOUSE_ENUM,
};
