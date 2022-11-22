export default [
  {
    path: '/',
    redirect: '/order-search',
  },
  {
    name: '履约110',
    path: '/order-search',
    component: './OrderList',
    menuRender: false,
  },
];
