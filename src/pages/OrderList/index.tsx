import servicesOrder from '@/services/order';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
  ProFormInstance,
} from '@ant-design/pro-components';
import { Badge, message, Tooltip, Button, Empty, Spin } from 'antd';
import { DoubleRightOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import React, { useMemo, useRef, useState } from 'react';
import { useModel } from '@umijs/max';
import moment from 'moment';

import { formatDecimal } from '@/utils/util';
import {
  ORDER_CHANNEL,
  ORDER_HUANG_TYPE,
  ORDER_HUANG_STATUS,
  ORDER_SKU_HUANG_TYPE,
  WAREHOUSE_ENUM,
  ORDER_SKU_HUANG_STATUS,
  DEFAULT_COLOR,
  DEFAULT_BG_COLOR,
  DEFAULT_TEXT,
  // SHOP_TYPE_ENUMS,
} from '@/utils/enum';

const { queryOrderList, exportData, getBrandEnums /* queryOrderDetailList */ } =
  servicesOrder.OrderController;
import {
  requestCarrierEnums,
  requestProvinceEnums,
  requestStoreEnums,
} from './requestFilter';

import './index.less';

const OrderList = (props: IOrderPage) => {
  const { from = '', transParams = {} } = props;
  // const accessData = useAccess(); // 权限相关信息 后期权限配置可用 ！！
  // const initialStateData = useModel('@@initialState'); // initialState
  const { count } = useModel('counter');
  console.log('initstate count:', count);

  const regX: RegExp = /^([a-zA-Z0-9]{1,},)*[a-zA-Z0-9]{1,}$/;
  const actionRef = useRef<ActionType>();
  const refSearchForm = useRef<ProFormInstance>();
  const [isLoading, setIsLoading] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isColloseAll, setIsColloseAll] = useState<boolean>(false);
  const [tableData, setTableData] = useState<API.OrderRow[]>([]);
  // const [innerData, setInnerData] = useState<API.IInnerTableRow>();
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly React.Key[]>(
    [],
  );
  const [isFetching, setIsFetching] = useState(false);

  /**
   * @description: 品牌模糊查询
   * @param {any} params
   */
  const requestBrandEnumsInner = async (params: any) => {
    if (
      params?.keyWords === undefined ||
      params?.keyWords === '' ||
      params?.keyWords?.trim() === ''
    )
      return;
    try {
      setIsFetching(true);
      const resData = await getBrandEnums({
        name: params?.keyWords,
        pageNum: 0,
        pageSize: 500,
      });
      setIsFetching(false);
      return (resData?.content || []).map((item: any) => ({
        value: item.id,
        label: item.name,
      }));
    } catch (error) {
      setIsFetching(true);
      return [];
    }
  };

  // 子状态【去除面板的1170】
  const ORDER_SKU_HUANG_TYPE_LIST: TypeKeyValue = useMemo(() => {
    const allKeys: TypeKeyValue = { ...ORDER_SKU_HUANG_TYPE };
    delete allKeys[1170];
    return allKeys;
  }, [ORDER_SKU_HUANG_TYPE]);

  const columns: ProColumns<API.OrderRow>[] = [
    {
      title: '订单状态',
      dataIndex: 'hangUpStatus',
      hideInTable: true,
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      valueEnum: ORDER_HUANG_TYPE,
      width: 120,
    },
    {
      title: '子订单号',
      dataIndex: 'subOrderNumber',
      fieldProps: {
        placeholder: '请输入,多单查询以“,”分隔',
      },
      formItemProps: {
        rules: [
          {
            pattern: regX,
            message: '多单查询以“,”分隔',
          },
        ],
      },
      valueType: 'text',
      search: {
        transform: (value) => ({
          subOrderNumber: value === '' ? undefined : value,
        }),
      },
      width: 120,
    },
    {
      title: '主订单号',
      dataIndex: 'mainOrderNumber',
      fieldProps: {
        placeholder: '请输入,多单查询以“,”分隔',
      },
      formItemProps: {
        rules: [
          {
            pattern: regX,
            message: '多单查询以“,”分隔',
          },
        ],
      },
      search: {
        transform: (value) => ({
          mainOrderNumber: value === '' ? undefined : value,
        }),
      },
      valueType: 'text',
      width: 120,
    },

    {
      title: '手机号',
      dataIndex: 'phone',
      hideInTable: true,
      formItemProps: {
        rules: [
          {
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            message: '手机号格式不正确',
          },
        ],
      },
      search: {
        transform: (value) => ({
          phone: value === '' ? undefined : value,
        }),
      },
      valueType: 'text',
    },
    {
      title: '订单类型',
      dataIndex: 'orderType',
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      valueEnum: {
        1: 'R1',
        4: 'R4',
        5: 'R5',
      },
      width: 80,
    },
    {
      title: '订单渠道',
      dataIndex: 'orderChannel',
      valueType: 'select',
      valueEnum: ORDER_CHANNEL,
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      width: 80,
    },
    {
      title: '子状态',
      dataIndex: 'subHangUpStatus',
      hideInTable: true,
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      valueEnum: ORDER_SKU_HUANG_TYPE_LIST,
      width: 120,
    },
    {
      title: '履约仓',
      dataIndex: 'warehouseId',
      hideInTable: true, // 仅搜索表单显示
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      valueEnum: WAREHOUSE_ENUM,
      width: 120,
    },
    {
      title: '店铺',
      dataIndex: 'shopName',
      hideInTable: true, // 仅搜索表单显示
      proFieldProps: {
        debounceTime: 800,
      },
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      request: requestStoreEnums,
      width: 120,
    },
    {
      title: '省市区',
      dataIndex: 'provinceParam',
      hideInTable: true, // 仅搜索表单显示
      proFieldProps: {
        treeNodeFilterProp: 'title',
      },
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
        changeOnSelect: true,
        fieldNames: {
          children: 'children',
          label: 'name',
          value: 'code',
        },
      },
      valueType: 'cascader',
      request: requestProvinceEnums,
      search: {
        transform: (value) => ({
          province: value?.length > 0 ? value[0] : undefined,
          city: value?.length > 1 ? value[1] : undefined,
          district: value?.length > 2 ? value[2] : undefined,
        }),
      },
      width: 120,
    },
    {
      title: '承运商',
      dataIndex: 'carrierName',
      hideInTable: true, // 仅搜索表单显示
      proFieldProps: {
        debounceTime: 800,
      },
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      request: requestCarrierEnums,
      width: 120,
    },
    {
      title: '品牌',
      dataIndex: 'brandId',
      hideInTable: true, // 仅搜索表单显示
      proFieldProps: {
        debounceTime: 800,
      },
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
        notFoundContent: isFetching ? <Spin size="small" /> : null,
      },
      valueType: 'select',
      params: {
        pageIndex: 0,
        pageSize: 1000,
      },
      request: requestBrandEnumsInner,
      width: 120,
    },
    {
      title: '商品编码',
      dataIndex: 'skuCode',
      hideInTable: true,
      fieldProps: {
        placeholder: '请输入',
      },
      valueType: 'text',
      width: 120,
      search: {
        transform: (value) => ({
          skuCode: value === '' ? undefined : value,
        }),
      },
    },
    {
      title: '下单日期',
      dataIndex: 'rangeDate',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: `${value[0]} 00:00:00`,
            endTime: `${value[1]} 23:59:59`,
          };
        },
      },
    }, // 搜索表单
    {
      title: '用户名',
      dataIndex: 'userName',
      hideInSearch: true,
      valueType: 'text',
      width: 100,
    },
    {
      title: '店铺名',
      dataIndex: 'storeName',
      hideInSearch: true,
      valueType: 'text',
      width: 100,
    },
    {
      title: '省',
      dataIndex: 'province',
      hideInSearch: true,
      valueType: 'text',
    },
    {
      title: '市',
      dataIndex: 'city',
      hideInSearch: true,
      valueType: 'text',
    },
    {
      title: '区',
      dataIndex: 'district',
      hideInSearch: true,
      valueType: 'text',
    },
    {
      title: '订单金额',
      dataIndex: 'orderSaleAmount',
      hideInSearch: true,
      valueType: 'text',
      renderText: (text) => formatDecimal(text || 0, 2),
    },
    {
      title: '履约仓/店铺',
      dataIndex: 'warehouseName',
      valueType: 'text',
      hideInSearch: true,
      render: (_, record) => {
        return record?.warehouseName || record?.shopName;
      },
    },
    {
      title: '下单日期',
      dataIndex: 'orderCreateDate',
      valueType: 'date',
      hideInSearch: true,
    },
    {
      title: '累计履约耗时(h)',
      dataIndex: 'cumulativeFulfillmentTimeConsuming',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '当前状态',
      dataIndex: 'hangUpStatus',
      hideInSearch: true,
      width: 160,
      render: (text) => {
        const currentStatus = ORDER_HUANG_STATUS?.find(
          (item) => item.status === String(text),
        );
        return (
          <div
            className="my-tag"
            style={{
              color: currentStatus?.color || DEFAULT_COLOR,
              borderColor: currentStatus?.bgColor || DEFAULT_BG_COLOR,
              backgroundColor: currentStatus?.bgColor || DEFAULT_BG_COLOR,
            }}
          >
            <Badge
              color={currentStatus?.color || DEFAULT_COLOR}
              text={currentStatus?.name || DEFAULT_TEXT}
              style={{ color: currentStatus?.color || DEFAULT_COLOR }}
            />
          </div>
        );
      },
    },
  ];

  const innderColumns: ProColumns<API.InnerOrderDetail>[] = [
    { title: '商品编码', dataIndex: 'skuCode', valueType: 'text', width: 150 },
    { title: '商品名', dataIndex: 'skuName', valueType: 'text', width: 220 },
    { title: '品牌', dataIndex: 'brandName', valueType: 'text', width: 120 },
    { title: '数量', dataIndex: 'quantity', valueType: 'text', width: 100 },
    {
      title: '合计金额',
      dataIndex: 'totalAmount',
      valueType: 'text',
      renderText: (text) => {
        return isNaN(text) ? text : formatDecimal(text || 0, 2);
      },
    },
    {
      title: '包裹号',
      dataIndex: 'packageCode',
      valueType: 'text',
      // width: 100,
    },
    {
      title: '运单号',
      dataIndex: 'providerNo',
      valueType: 'text',
      // width: 120,
    },
    {
      title: '承运商',
      dataIndex: 'carrierName',
      valueType: 'text',
      width: 120,
    },
    {
      title: '子状态耗时(h)',
      dataIndex: 'hangUpTimeConsuming',
      valueType: 'text',
      width: 120,
    },
    {
      title: '当前子状态',
      dataIndex: 'hangUpStatus',
      width: 160,
      render: (text) => {
        const currentStatus = ORDER_SKU_HUANG_STATUS?.find(
          (item) => item.status === String(text),
        );
        return (
          <Badge
            color={currentStatus?.color || DEFAULT_COLOR}
            text={currentStatus?.name || DEFAULT_TEXT}
            style={{ color: currentStatus?.color || DEFAULT_COLOR }}
          />
        );
      },
    },
  ];

  const expandedRowRender = (record: API.OrderRow) => {
    // const data: API.InnerOrderDetail[] =
    //   record?.subOrderNumber &&
    //   innerData?.hasOwnProperty(record?.subOrderNumber)
    //     ? innerData[record.subOrderNumber]
    //     : []
    const data: API.InnerOrderDetail[] = record?.fulfillmentSubOrderDetailList
      ? record?.fulfillmentSubOrderDetailList
      : [];
    return (
      <ProTable
        columns={innderColumns}
        headerTitle={false}
        search={false}
        options={false}
        // dataSource={data}
        dataSource={data}
        pagination={false}
        className="my-table-inner"
      />
    );
  };

  /**
   * @description: 获取商品列表（内嵌表格）
   * @param {readonly} keys
   */
  // const getOrderDetailList = async (keys: readonly React.Key[]) => {
  //   try {
  //     const result = await queryOrderDetailList({
  //       subOrderNumberList: keys.join(','),
  //     });
  //     const currentInnerData = {
  //       ...innerData,
  //       ...result,
  //     };
  //     setInnerData(currentInnerData);
  //   } catch (err: any) {
  //     message.error(err?.message || err);
  //   }
  // };

  /**
   * @description: 全部展开/全部收起
   * @param {*} void
   */
  const handleToggleCollose = (): void => {
    if (tableData?.length === 0) {
      message.warning('暂无要展开内容！');
      return;
    }

    // @ts-ignore
    const currentExpandRows: readonly React.Key[] = !isColloseAll
      ? tableData?.map((item) => item.subOrderNumber)
      : [];

    // if (!isColloseAll) {
    //   // 展开全部
    //   const rowsExpandNew: readonly React.Key[] = currentExpandRows.filter(
    //     (item) => !expandedRowKeys.includes(item),
    //   );
    //   if (rowsExpandNew?.length === 0) return;
    //   getOrderDetailList(rowsExpandNew);
    // }
    setIsColloseAll(!isColloseAll);
    setExpandedRowKeys(currentExpandRows);
  };

  /**
   * @description: 主表格展开/收起
   * @param {React} keys
   */
  const handleExpandChange = (keys: React.Key[]): void => {
    const isAllExpand: boolean =
      keys?.length > 0 && keys?.length === tableData?.length;
    // const rowsExpandNew: readonly React.Key[] = keys.filter(
    //   (item) => !expandedRowKeys.includes(item),
    // );
    setExpandedRowKeys(keys);
    setIsColloseAll(isAllExpand);
    // 批量查询子表格
    // if (rowsExpandNew?.length === 0) return;
    // getOrderDetailList(rowsExpandNew);
  };

  /**
   * @description: 导出表格数据
   */
  const handleExport = async () => {
    if (refSearchForm.current) {
      try {
        const values = refSearchForm.current.getFieldsValue();
        const province =
          values.provinceParam?.length > 0
            ? values['provinceParam'][0]
            : undefined;
        const city =
          values.provinceParam?.length > 1
            ? values['provinceParam'][1]
            : undefined;
        const district =
          values.provinceParam?.length > 2
            ? values['provinceParam'][2]
            : undefined;

        let reqParams: any = {
          mainOrderNumber: values?.mainOrderNumber,
          subOrderNumber: values?.subOrderNumber,
          phone: values?.phone,
          startTime:
            values?.rangeDate?.length > 0
              ? moment(values.rangeDate[0])
                  .startOf('day')
                  .format('YYYY-MM-DD HH:mm:ss')
              : undefined,
          endTime:
            values?.rangeDate?.length > 1
              ? moment(values.rangeDate[1])
                  .endOf('day')
                  .format('YYYY-MM-DD HH:mm:ss')
              : undefined,
          hangUpStatus: values?.hangUpStatus, // 订单状态
          orderType: values?.orderType, // 订单类型
          orderChannel: values?.orderChannel, // 渠道
          subHangUpStatus: values?.subHangUpStatus, // 子订单状态
          warehouseId: values?.warehouseId, // 履约仓
          shopName: values?.shopName, // 店铺
          province, // 省
          city, // 市
          district, // 区
          carrierName: values?.carrierName, //  承运商
          brandId: values?.brandId, // 品牌
          skuCode: values?.skuCode, // 商品编码
        };
        if (from === 'DRAWER') {
          reqParams = {
            ...reqParams,
            ...transParams,
          };
        }
        console.log('导出数据params:', reqParams);

        setIsLoading(true);
        await exportData(reqParams);
        message.success('下载中,稍后将发送至您的邮件中,请注意查收!');
        setIsLoading(false);
      } catch (err: any) {
        message.error(err?.message || err);
        setIsLoading(false);
      }
    }
  };

  /**
   * @description: 查询表格数据
   * @param {any} params
   */
  const requestOrderList = async (params: any) => {
    if (!from && Object.keys(params).length <= 2) {
      if (isReset) {
        setIsReset(false);
      } else {
        message.warning('请输入查询条件!');
      }
      return {
        data: [],
        total: 0,
        success: true,
      };
    }
    setIsReset(false);

    let reqParams: any = {
      page: params?.current - 1,
      size: params?.pageSize,
      hangUpStatus: params?.hangUpStatus, // 订单状态
      mainOrderNumber: params?.mainOrderNumber, // 主订单号
      subOrderNumber: params?.subOrderNumber, // 子订单号
      phone: params.phone, // 手机号
      orderType: params?.orderType, // 订单类型
      orderChannel: params?.orderChannel, // 渠道
      subHangUpStatus: params?.subHangUpStatus, // 子订单状态
      warehouseId: params?.warehouseId, // 履约仓
      shopName: params?.shopName, // 店铺
      province: params?.province, // 省
      city: params?.city, // 市
      district: params?.district, // 区
      carrierName: params?.carrierName, //  承运商
      brandId: params?.brandId, // 品牌
      skuCode: params?.skuCode, // 商品编码
      startTime: params?.startTime, // 开始时间
      endTime: params?.endTime, // 结束时间
    };
    if (from === 'DRAWER') {
      reqParams = {
        ...reqParams,
        ...transParams,
      };
    }
    const { content = [], totalElements = 0 } = await queryOrderList({
      ...reqParams,
    });
    const dataContent: API.OrderRow[] = (content || []).map(
      (row: API.OrderRow) => ({
        ...row,
        fulfillmentSubOrderDetailList: (
          row?.fulfillmentSubOrderDetailList || []
        ).map((innerRow: API.InnerOrderDetail, idx) => ({
          ...innerRow,
          key: `${innerRow.subOrderNumber}-${idx}`,
        })),
      }),
    );
    setTableData(dataContent);
    if (
      (params?.subHangUpStatus ||
        params?.brandId ||
        params?.skuCode ||
        params?.carrierName) &&
      dataContent?.length > 0
    ) {
      // 默认展开 -- 查询筛选项： 子状态||品牌||商品编码||承运商
      const currentExpandRows: any[] = dataContent?.map(
        (item) => item.subOrderNumber,
      );
      setIsColloseAll(true);
      setExpandedRowKeys(currentExpandRows);
    } else {
      setIsColloseAll(false);
      setExpandedRowKeys([]);
    }
    return {
      data: dataContent,
      total: totalElements || 0,
      success: true,
    };
  };

  return (
    <PageContainer
      className="my-page-container"
      extra={[
        <Button type="link" className="info-desc" key="desc">
          数据每小时准点更新
        </Button>,
      ]}
    >
      <ProTable<API.OrderRow>
        headerTitle={
          tableData?.length >= 0 && (
            <div className="table-collose-all">
              <Tooltip
                placement="top"
                title={isColloseAll ? '点击全部收起' : '点击全部展开'}
              >
                <Button
                  icon={
                    <DoubleRightOutlined rotate={isColloseAll ? -90 : 90} />
                  }
                  onClick={handleToggleCollose}
                >
                  {isColloseAll ? '收起全部' : '展开全部'}
                </Button>
              </Tooltip>
              {from === 'DRAWER' && (
                <Button
                  ghost
                  type="primary"
                  className="m-l-10"
                  disabled={isLoading}
                  onClick={handleExport}
                >
                  导出
                </Button>
              )}
            </div>
          )
        }
        locale={{
          emptyText: <Empty description="输入查询条件后显示结果" />,
        }}
        scroll={{ y: !from ? 'calc(100vh - 445px)' : 'auto' }}
        actionRef={actionRef}
        rowKey="subOrderNumber"
        tableClassName="my-table"
        formRef={refSearchForm}
        form={{
          ignoreRules: false,
        }}
        manualRequest={!from} // 手动触发首次请求
        search={{
          labelWidth: 100,
          showHiddenNum: true,
          className: 'my-search',
          defaultCollapsed: false,
          optionRender: (searchConfig, formProps, dom) => [
            ...dom.reverse(),
            <Tooltip title="下载" key="download-tooltip">
              <Button type="link" disabled={isLoading} onClick={handleExport}>
                <CloudDownloadOutlined
                  key="download"
                  className="download-btn"
                  style={{ color: isLoading ? 'grey' : '#1890ff' }}
                />
              </Button>
            </Tooltip>,
          ],
        }}
        request={requestOrderList}
        pagination={{
          defaultPageSize: 10,
        }}
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandAllRows: false,
          expandedRowKeys,
          // @ts-ignore
          onExpandedRowsChange: handleExpandChange,
        }}
        onReset={() => {
          setIsReset(true);
          setIsColloseAll(false);
          setExpandedRowKeys([]);
          setTableData([]);
        }}
      ></ProTable>
    </PageContainer>
  );
};

export default OrderList;
