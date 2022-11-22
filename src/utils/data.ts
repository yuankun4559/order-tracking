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
  {
    status: '2',
    name: '等待占库中',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '3',
    name: '疫情拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '4',
    name: '延期发货',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },
  {
    status: '5',
    name: '出库拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '6',
    name: 'ODS挂起',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '7',
    name: '出库中',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '8',
    name: '待签收',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '9',
    name: '待店铺接单',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '10',
    name: '待发货',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
];

const ORDER_SKU_HUANG_STATUS: IOrderStatus[] = [
  {
    status: '1',
    name: '待支付',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },
  {
    status: '2',
    name: '等待占库中',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '3',
    name: '疫情拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '4',
    name: '延期发货',
    color: 'rgba(24,144,255,1)',
    bgColor: 'rgba(24,144,255,.1)',
  },
  {
    status: '5',
    name: '出库拦截',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '6',
    name: 'ODS挂起',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '7',
    name: '出库中',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '8',
    name: '待签收',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
  {
    status: '9',
    name: '待店铺接单',
    color: 'rgba(255,24,24,1)',
    bgColor: 'rgba(255,24,24,.1)',
  },
  {
    status: '10',
    name: '待发货',
    color: 'rgba(205,123,0,1)',
    bgColor: 'rgba(205,123,0,.1)',
  },
];
export { ORDER_HUANG_STATUS, ORDER_SKU_HUANG_STATUS };
