const CARD_LEVEL_ENUMS: IAlertCardLevelMap = {
  10: {
    key: 10,
    level: '一级预警',
  },
  20: {
    key: 20,
    level: '二级预警',
  },
  30: {
    key: 30,
    level: '三级预警',
  },
  40: {
    key: 40,
    level: '',
  }, // 正常卡片
};

const ALERT_CARD_ENUMS: IAlertCardMap = {
  100: {
    key: 100,
    name: '正常时效内',
    charts: [], // 无图表
  },
  110: {
    key: 110,
    name: '超时未收货',
    charts: ['PIE_ORDER_TYPE', 'HISTOGRAM_SUSPEND_DRATION'],
  },
  120: {
    key: 120,
    name: '严重超时未收货',
    charts: [], // 无图表
  },
  // 以下key值不确定
  130: {
    key: 130,
    name: '下单超3小时未支付',
    charts: ['PIE_ORDER_TYPE', 'HISTOGRAM_BD_RPM_NAME'],
  },
  140: {
    key: 140,
    name: '调拨在途挂单',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'HISTOGRAM_SUSPEND_DRATION'],
  },
  150: {
    key: 150,
    name: '预售超时未发货',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'HISTOGRAM_BRAND_NAME'],
  },
  160: {
    key: 160,
    name: '超卖挂单',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'HISTOGRAM_BRAND_NAME'],
  },
  170: {
    key: 170,
    name: '疫情拦截挂单',
    charts: ['HISTOGRAM_SUSPEND_DRATION', 'HISTOGRAM_PROVINCE'],
  },
  180: {
    key: 180,
    name: 'R1总仓超时未出库',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'HISTOGRAM_CARRIER'],
  },
  190: {
    key: 190,
    name: 'R4未发货预警',
    charts: ['HISTOGRAM_STORE_NAME'],
    // charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_SQE_CHARGE'],
  },
  200: {
    key: 200,
    name: 'R4超时未发货',
    charts: ['HISTOGRAM_STORE_NAME'],
    // charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_SQE_CHARGE'],
  },
  210: {
    key: 210,
    name: 'R4店铺拒单(P2)',
    charts: [],
  },
  219: {
    key: 219,
    name: 'R5未发货预警',
    charts: ['HISTOGRAM_STORE_NAME'],
  },
  220: {
    key: 220,
    name: 'R5超时未发货',
    charts: ['HISTOGRAM_STORE_NAME'],
  },
  230: {
    key: 230,
    name: 'R1超时未揽件',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'PIE_DELIVERY', 'HISTOGRAM_CARRIER'],
  },
  240: {
    key: 240,
    name: 'R4_直发超时未揽件',
    charts: ['PIE_STORE_TYPE', 'HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  250: {
    key: 250,
    name: 'R4_工厂超时未揽件',
    charts: ['PIE_STORE_TYPE', 'HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  260: {
    key: 260,
    name: 'R5超时未揽件',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  270: {
    key: 270,
    name: 'R1分仓超时未入库',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'PIE_COMPARTMENT', 'HISTOGRAM_CARRIER'],
  },
  280: {
    key: 280,
    name: 'R1分仓超时未出库',
    charts: ['PIE_COMPARTMENT'],
  },
  290: {
    key: 290,
    name: 'R4分仓超时未验货',
    charts: ['PIE_COMPARTMENT', 'HISTOGRAM_STORE_NAME'],
  },
  300: {
    key: 300,
    name: 'R4分仓超时未出库',
    charts: ['PIE_COMPARTMENT'],
  },
  310: {
    key: 310,
    name: 'R4_平台分仓超时未揽件',
    charts: ['PIE_COMPARTMENT', 'HISTOGRAM_CARRIER'],
  },
  320: {
    key: 320,
    name: 'R1直销(自配)超时未妥投',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'HISTOGRAM_CARRIER'],
  },
  330: {
    key: 330,
    name: 'R1直销(三方)超时未妥投',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'HISTOGRAM_CARRIER'],
  },
  340: {
    key: 340,
    name: 'R1企拍超时未妥投',
    charts: ['PIE_AGREEMENT_WAREHOUSE', 'PIE_DELIVERY', 'HISTOGRAM_CARRIER'],
  },
  350: {
    key: 350,
    name: 'R1物流轨迹停滞(P2)',
    charts: [],
  },
  360: {
    key: 360,
    name: 'R4_平台(自配)超时未妥投',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  370: {
    key: 370,
    name: 'R4_平台(三方)超时未妥投',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  380: {
    key: 380,
    name: 'R4_平台(企拍)超时未妥投',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  390: {
    key: 390,
    name: 'R4_直发超时未妥投',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  400: {
    key: 400,
    name: 'R4_工厂超时未妥投',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
  410: {
    key: 410,
    name: 'R5超时未妥投',
    charts: ['HISTOGRAM_STORE_NAME', 'HISTOGRAM_CARRIER'],
  },
};

const GRAPH_TYPE: TypeKeyValue = {
  PIE: 'PIE', // 饼图
  HISTOGRAM: 'HISTOGRAM', // 柱状图
};

const GRAPH_DIMENSION: TypeKeyValue = {
  ORDER_TYPE: '订单类型',
  SUSPEND_DRATION: '挂起时长',
  AGREEMENT_WAREHOUSE: '履约仓',
  STORE_TYPE: '店铺类型',
  COMPARTMENT: '分仓',
  DELIVERY: '配送方式',
  BD_RPM_NAME: 'BD/RPM姓名',
  BRAND_NAME: '品牌名',
  PROVINCE: '省',
  CARRIER: '承运商',
  STORE_NAME: 'R5店铺名', // R4/R5
  SQE_CHARGE: '供管部负责人',
};

const GRAPH_ENUMS: IGraphItem[] = [
  {
    key: 'PIE_ORDER_TYPE',
    type: GRAPH_TYPE['PIE'],
    title: '各订单类型单量',
    dimension: GRAPH_DIMENSION['ORDER_TYPE'],
    unit: '',
    url: 'fulfillment-order/order-type-distribution', //接口请求地址
  },
  {
    key: 'PIE_AGREEMENT_WAREHOUSE',
    type: GRAPH_TYPE['PIE'],
    title: '各履约仓单量',
    dimension: GRAPH_DIMENSION['AGREEMENT_WAREHOUSE'],
    unit: '',
    url: 'fulfillment-order/warehouse-distribution', //接口请求地址
  },
  {
    key: 'PIE_STORE_TYPE',
    type: GRAPH_TYPE['PIE'],
    title: '各类型店铺单量',
    dimension: GRAPH_DIMENSION['STORE_TYPE'],
    unit: '',
    url: 'fulfillment-order/shop-type-distribution', //接口请求地址
  },
  {
    key: 'PIE_COMPARTMENT',
    type: GRAPH_TYPE['PIE'],
    title: '各分仓单量',
    dimension: GRAPH_DIMENSION['COMPARTMENT'],
    unit: '',
    url: 'fulfillment-order/sub-warehouse-distribution', //接口请求地址
  },
  {
    key: 'PIE_DELIVERY',
    type: GRAPH_TYPE['PIE'],
    title: '各配送方式单量',
    dimension: GRAPH_DIMENSION['DELIVERY'],
    unit: '',
    url: 'fulfillment-order/delivery-method-distribution', //接口请求地址
  },
  {
    key: 'HISTOGRAM_SUSPEND_DRATION',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各挂起时长单量(Top20)',
    dimension: GRAPH_DIMENSION['SUSPEND_DRATION'],
    unit: '',
    url: 'fulfillment-order/hang-time-distribution', //接口请求地址
  },
  {
    key: 'HISTOGRAM_BD_RPM_NAME',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各BD/RPM单量(Top20)',
    dimension: GRAPH_DIMENSION['BD_RPM_NAME'],
    unit: '',
    url: 'fulfillment-order/salesman-distribution', //接口请求地址
  },
  {
    key: 'HISTOGRAM_BRAND_NAME',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各品牌单量(Top20)',
    dimension: GRAPH_DIMENSION['BRAND_NAME'],
    unit: '',
    url: 'fulfillment-order/brand-distribution', //接口请求地址
  },
  {
    key: 'HISTOGRAM_PROVINCE',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各省单量',
    dimension: GRAPH_DIMENSION['PROVINCE'],
    unit: '',
    url: 'fulfillment-order/province-distribution', //接口请求地址
  },
  {
    key: 'HISTOGRAM_CARRIER',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各承运商单量(Top20)',
    dimension: GRAPH_DIMENSION['CARRIER'],
    unit: '',
    url: 'fulfillment-order/carrier-distribution', //接口请求地址
  },
  {
    key: 'HISTOGRAM_STORE_NAME',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各店铺单量(Top20)',
    dimension: GRAPH_DIMENSION['STORE_NAME'],
    unit: '',
    url: 'fulfillment-order/shop-distribution', //接口请求地址
  }, // R4 / R5
  {
    key: 'HISTOGRAM_SQE_CHARGE',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '供管部负责人单量(P2)',
    dimension: GRAPH_DIMENSION['SQE_CHARGE'],
    unit: '',
    url: 'api/v3/graphdata', //接口请求地址
  },
  {
    key: 'HISTOGRAM_COMPARTMENT',
    type: GRAPH_TYPE['HISTOGRAM'],
    title: '各分仓单量',
    dimension: GRAPH_DIMENSION['COMPARTMENT'],
    unit: '',
    url: 'fulfillment-order/sub-warehouse-distribution', //接口请求地址
  },
];

export { GRAPH_TYPE, GRAPH_ENUMS, ALERT_CARD_ENUMS, CARD_LEVEL_ENUMS };
