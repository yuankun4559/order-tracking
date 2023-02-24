export default [
  {
    path: '/',
    redirect: '/order-dashboard',
  },
  {
    name: '履约看板',
    path: '/order-dashboard',
    component: './OrderDashboard',
  }, // 履约110订单查询
  {
    name: '履约明细查询',
    path: '/order-search',
    component: './OrderList',
  }, // 履约110订单查询
];
