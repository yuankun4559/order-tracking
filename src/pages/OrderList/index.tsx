import servicesOrder from '@/services/order';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProTable,
  ProFormInstance,
} from '@ant-design/pro-components';
import { Badge, message, Tooltip, Button, Empty } from 'antd';
import { DoubleRightOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import React, { useRef, useState } from 'react';
import moment from 'moment';

import { formatDecimal } from '@/utils/format';
import {
  ORDER_CHANNEL,
  ORDER_HUANG_TYPE,
  ORDER_HUANG_STATUS,
  ORDER_SKU_HUANG_TYPE,
  WAREHOUSE_ENUM,
  ORDER_SKU_HUANG_STATUS,
  SHOP_TYPE_ENUMS,
} from '@/utils/enum';

const {
  queryOrderList,
  queryOrderDetailList,
  exportData,
  getStoreEnumsMock,
  getProvinceEnums,
  getCarrierEnumsMock,
  getBrandEnumsMock,
} = servicesOrder.OrderController;

import './index.less';

const OrderList = (props: IOrderPage) => {
  const { from = '', transData = {} } = props;
  console.log('order list page props from :', from, transData);
  const regX: RegExp = /^([a-zA-Z0-9]{1,},)*[a-zA-Z0-9]{1,}$/;
  const actionRef = useRef<ActionType>();
  const refSearchForm = useRef<ProFormInstance>();
  const [isLoading, setIsLoading] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isColloseAll, setIsColloseAll] = useState<boolean>(false);
  const [tableData, setTableData] = useState<API.UserInfo[]>([]);
  const [innerData, setInnerData] = useState<API.IInnerTableRow>();
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly React.Key[]>(
    [],
  );

  /**
   * @description: 店铺模糊查询
   * @param {any} params
   */
  const requestStoreEnums = async (params: any) => {
    try {
      const resData = await getStoreEnumsMock({ shopName: params?.keyWords });
      return (resData || []).map((item: any) => ({
        value: item.shopId,
        label: item.shopName,
      }));
    } catch (error) {
      return [];
    }
  };

  /**
   * @description: 品牌模糊查询
   * @param {any} params
   */
  const requestBrandEnums = async (params: any) => {
    try {
      const resData = await getBrandEnumsMock({
        brandName: params?.keyWords,
        pageNum: 0,
        pageSize: 50,
      });
      return (resData || []).map((item: any) => ({
        value: item.brandId,
        label: item.brandName,
      }));
    } catch (error) {
      return [];
    }
  };

  /**
   * @description: 获取省市区数据
   */
  const requestProvinceEnums = async () => {
    try {
      const resData = await getProvinceEnums();
      return resData || [];
    } catch (error) {
      return [];
    }
  };

  /**
   * @description: 获取承运商数据
   * @param {any} params
   */
  const requestCarrierEnums = async (params: any) => {
    try {
      const resData = await getCarrierEnumsMock({
        carrierName: params.keyWords,
      });
      return (resData || []).map((item: string) => ({
        value: item,
        label: item,
      }));
    } catch (error) {
      return [];
    }
  };

  const columns: ProColumns<API.UserInfo>[] = [
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
      valueType: 'text',
    },
    {
      title: '订单类型',
      dataIndex: 'orderType',
      // hideInSearch: true,
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
      valueEnum: ORDER_SKU_HUANG_TYPE,
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
      dataIndex: 'userId',
      hideInTable: true, // 仅搜索表单显示
      proFieldProps: {
        debounceTime: 1000,
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
      width: 120,
    },
    {
      title: '承运商',
      dataIndex: 'carrier',
      hideInTable: true, // 仅搜索表单显示
      proFieldProps: {
        debounceTime: 1000,
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
        debounceTime: 1000,
      },
      fieldProps: {
        placeholder: '请选择',
        showSearch: true,
      },
      valueType: 'select',
      request: requestBrandEnums,
      width: 120,
    },
    {
      title: '商品编码',
      dataIndex: 'skuCode',
      fieldProps: {
        placeholder: '请输入',
      },
      valueType: 'text',
      width: 120,
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
    },
    {
      title: '店铺名',
      dataIndex: 'storeName',
      hideInSearch: true,
      valueType: 'text',
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
      dataIndex: 'area',
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
      title: '店铺类型',
      dataIndex: 'shopType', // 接口缺字段
      valueType: 'select',
      valueEnum: SHOP_TYPE_ENUMS,
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
      fixed: 'right',
      render: (text) => {
        const currentStatus = ORDER_HUANG_STATUS?.find(
          (item) => item.status === String(text),
        );
        const result = !text ? (
          ''
        ) : (
          <div
            className="my-tag"
            style={{
              color: currentStatus?.color,
              borderColor: currentStatus?.bgColor,
              backgroundColor: currentStatus?.bgColor,
            }}
          >
            <Badge
              color={currentStatus?.color}
              text={currentStatus?.name}
              style={{ color: currentStatus?.color }}
            />
          </div>
        );
        return result;
      },
    },
  ];

  const innderColumns: ProColumns<API.InnerOrderDetail>[] = [
    { title: '商品编码', dataIndex: 'skuCode', valueType: 'text', width: 210 },
    { title: '商品名', dataIndex: 'skuName', valueType: 'text', width: '20%' },
    { title: '品牌', dataIndex: 'brandName', valueType: 'text' },
    { title: '数量', dataIndex: 'quantity', valueType: 'text' },
    {
      title: '合计金额',
      dataIndex: 'totalAmount',
      valueType: 'text',
      renderText: (text) => formatDecimal(text || 0, 2),
    },
    {
      title: '子状态耗时(h)',
      dataIndex: 'hangUpTimeConsuming',
      valueType: 'text',
    },
    {
      title: '当前子状态',
      dataIndex: 'hangUpStatus',
      width: 160,
      render: (text) => {
        console.log(text, '子状态');
        const currentStatus = ORDER_SKU_HUANG_STATUS?.find(
          (item) => item.status === String(text),
        );
        return (
          <Badge
            color={currentStatus?.color}
            text={currentStatus?.name}
            style={{ color: currentStatus?.color }}
          />
        );
      },
    },
  ];

  const expandedRowRender = (record: API.UserInfo) => {
    const data: API.InnerOrderDetail[] =
      record?.subOrderNumber &&
      innerData?.hasOwnProperty(record?.subOrderNumber)
        ? innerData[record.subOrderNumber]
        : [];
    return (
      <ProTable
        rowKey="subOrderNumber"
        columns={innderColumns}
        headerTitle={false}
        search={false}
        options={false}
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
  const getOrderDetailList = async (keys: readonly React.Key[]) => {
    try {
      const result = await queryOrderDetailList({
        subOrderNumberList: keys.join(','),
      });
      const currentInnerData = {
        ...innerData,
        ...result,
      };
      setInnerData(currentInnerData);
    } catch (err: any) {
      message.error(err?.message || err);
    }
  };

  /**
   * @description: 全部展开/全部收起
   * @param {*} void
   */
  const handleToggleCollose = (): void => {
    // @ts-ignore
    const currentExpandRows: readonly React.Key[] = !isColloseAll
      ? tableData?.map((item) => item.subOrderNumber)
      : [];
    if (!isColloseAll) {
      // 展开全部
      const rowsExpandNew: readonly React.Key[] = currentExpandRows.filter(
        (item) => !expandedRowKeys.includes(item),
      );
      if (rowsExpandNew?.length === 0) return;
      getOrderDetailList(rowsExpandNew);
    }
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
    const rowsExpandNew: readonly React.Key[] = keys.filter(
      (item) => !expandedRowKeys.includes(item),
    );
    setExpandedRowKeys(keys);
    setIsColloseAll(isAllExpand);
    // 批量查询子表格
    if (rowsExpandNew?.length === 0) return;
    getOrderDetailList(rowsExpandNew);
  };

  /**
   * @description: 导出
   */
  const handleExport = async () => {
    if (refSearchForm.current) {
      try {
        const values = refSearchForm.current.getFieldsValue();
        const params = {
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
        };
        setIsLoading(true);
        await exportData(params);
        message.success('下载中,稍后将发送至您的邮件中,请注意查收!');
        setIsLoading(false);
      } catch (err: any) {
        message.error(err?.message || err);
        setIsLoading(false);
      }
    }
  };

  const requestOrderList = async (params: any) => {
    console.log('params', params, transData);
    if (
      !from &&
      !params?.mainOrderNumber &&
      !params?.subOrderNumber &&
      !params?.phone &&
      !params?.startTime
    ) {
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
    const { content = [], totalElements = 0 } = await queryOrderList({
      // @ts-ignore
      page: params?.current - 1,
      size: params?.pageSize,
      mainOrderNumber: params?.mainOrderNumber,
      subOrderNumber: params?.subOrderNumber,
      phone: params.phone,
      startTime: params?.startTime,
      endTime: params?.endTime,
    });
    setTableData(content || []);
    return {
      data: content || [],
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
      <ProTable<API.UserInfo>
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
        scroll={{ y: 'calc(100vh - 445px)', x: 2000 }}
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
