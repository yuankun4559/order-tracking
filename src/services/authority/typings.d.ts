/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  // @ts-ignore
  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface IUserAccess {
    name?: string;
    userid: number;
  }

  interface OrderRow {
    subOrderNumber?: string;
    mainOrderNumber?: string;
    orderType: number;
    province?: string;
    city?: string;
    area?: string;
    shopName?: string;
    storeName?: string;
    userName?: string;
    warehouseName?: string;
    hangUpStatus?: number;
    orderCreateDate?: string;
    cumulativeFulfillmentTimeConsuming?: number;
    orderSaleAmount?: number;
    fulfillmentSubOrderDetailList?: InnerOrderDetail[];
  }

  // 内嵌订单明细
  interface InnerOrderDetail {
    id?: string;
    tranOrderNo?: string;
    totalAmount?: string;
    skuName?: string;
    packageCode?: string;
    hangUpStatus?: number;
    hangUpTimeConsuming?: number;
    carrier?: string;
    brandName?: string;
    subOrderNumber?: string;
  }

  interface IInnerTableRow {
    [key: string]: InnerOrderDetail[];
  }

  // @ts-ignore
  type definitions_0 = null;
}
