interface IOrderStatus {
  status: string;
  name: string;
  color: string;
  bgColor: string;
}

const ORDER_HUANG_STATUS: IOrderStatus[] = [
  {
    status: '1',
    name: '待支付',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },
  // new add
  {
    status: '2',
    name: 'OMS待下发',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '3',
    name: '等待占库中',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '4',
    name: '疫情拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '5',
    name: '延期发货',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },
  {
    status: '6',
    name: '出库拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '7',
    name: 'ODS挂起',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '8',
    name: '出库中',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '9',
    name: '待签收',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '10',
    name: '待店铺接单',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '11',
    name: '待发货',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
];

const ORDER_SKU_HUANG_STATUS: IOrderStatus[] = [
  {
    status: '11',
    name: '待支付',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },
  {
    status: '12',
    name: 'OMS待下发',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },

  {
    status: '13',
    name: '待签收',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '21',
    name: '已占库',
    color: 'rgba(82,196,26,1)',
    bgColor: 'rgba(82,196,26,.1)',
  },
  {
    status: '22',
    name: '等待调拨',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '23',
    name: '等待预售到货',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '24',
    name: '无实物库存(超卖)',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '25',
    name: '一品多供占库失败',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '31',
    name: '疫情拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '41',
    name: '已下发仓库',
    color: 'rgba(82,196,26,1)',
    bgColor: 'rgba(82,196,26,.1)',
  },
  {
    status: '42',
    name: '等待预售到货',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '51',
    name: '已出库',
    color: 'rgba(82,196,26,1)',
    bgColor: 'rgba(82,196,26,.1)',
  },
  {
    status: '52',
    name: '出库中',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '61',
    name: '待店铺接单',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '62',
    name: '已发货', // 大菠萝
    color: 'rgba(82,196,26,1)',
    bgColor: 'rgba(82,196,26,.1)',
  },
  {
    status: '63',
    name: '待发货', // 大菠萝
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '71',
    name: '已发货', // 工厂通
    color: 'rgba(82,196,26,1)',
    bgColor: 'rgba(82,196,26,.1)',
  },
  {
    status: '72',
    name: '待发货', // 工厂通
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
];
export { ORDER_HUANG_STATUS, ORDER_SKU_HUANG_STATUS };
