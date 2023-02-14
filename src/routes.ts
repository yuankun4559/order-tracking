export default [
  {
    path: '/',
    redirect: '/order-search',
  },
  {
    name: '履约看板',
    path: '/order-dashboard',
    component: './OrderDashboard',
    // menuRender: false,
  }, // 履约110订单查询
  {
    name: '履约110',
    path: '/order-search',
    component: './OrderList',
    // menuRender: false,
  }, // 履约110订单查询
];
