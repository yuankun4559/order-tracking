/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface PageInfo {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_UserInfo_ {
    page?: number;
    size?: number;
    totalPages?: number;
    totalElements: number;
    content?: Array<UserInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  // @ts-ignore
  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface UserInfo {
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
  }

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }

  // @ts-ignore
  type definitions_0 = null;
}
