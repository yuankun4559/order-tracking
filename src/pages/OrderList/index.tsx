import servicesOrder from '@/services/order';
import {
  ActionType,
  PageContainer,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { Badge, Tooltip } from 'antd';
import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';

import { ORDER_HUANG_STATUS } from '@/utils/data';

const { queryOrderList } = servicesOrder.OrderController;

import './index.less';

const OrderList: React.FC<unknown> = () => {
  const actionRef = useRef<ActionType>();
  const [isColloseAll, setIsColloseAll] = useState<boolean>(false);
  const [tableData, setTableData] = useState<API.UserInfo[]>([]);
  const [innerData, setInnerData] = useState<API.IInnerTableRow>();
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly React.Key[]>(
    [],
  );

  const columns: ProDescriptionsItemProps<API.UserInfo>[] = [
    {
      title: '子订单号',
      dataIndex: 'subOrderNumber',
      fieldProps: {
        placeholder: '请输入,多单查询以“,”分隔',
      },
      valueType: 'text',
    },
    {
      title: '主订单号',
      dataIndex: 'mainOrderNumber',
      fieldProps: {
        placeholder: '请输入,多单查询以“,”分隔',
      },
      valueType: 'text',
    },
    {
      title: '订单类型',
      dataIndex: 'orderType',
      hideInSearch: true,
      valueType: 'select',
      valueEnum: {
        1: 'R1',
        4: 'R4',
        5: 'R5',
      },
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      hideInTable: true,
      fieldProps: {
        placeholder: '请输入',
      },
      valueType: 'text',
    },
    {
      title: '下单日期',
      dataIndex: 'rangeDate',
      valueType: 'dateRange',
      hideInTable: true,
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      hideInSearch: true,
      valueType: 'text',
    },
    {
      title: '店铺名',
      dataIndex: 'shopName',
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
    },
    {
      title: '履约仓/店铺',
      dataIndex: 'orderSaleAmount',
      valueType: 'text',
      hideInSearch: true,
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
      render: (text) => {
        const currentStatus = ORDER_HUANG_STATUS?.find(
          (item) => item.status === String(text),
        );
        return (
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
      },
    },
  ];

  const innderColumns: ProDescriptionsItemProps<API.InnerOrderDetail>[] = [
    { title: '商品编码', dataIndex: 'skuCode', valueType: 'text' },
    { title: '商品名', dataIndex: 'skuName', valueType: 'text' },
    { title: '品牌', dataIndex: 'brandName', valueType: 'text' },
    { title: '数量', dataIndex: 'quantity', valueType: 'text' },
    { title: '合计金额', dataIndex: 'orderSaleAmount', valueType: 'text' },
    { title: '子状态耗时(h)', dataIndex: 'name', valueType: 'text' },
    {
      title: '当前子状态',
      dataIndex: 'hangUpStatus',
      render: (text) => {
        const currentStatus = ORDER_HUANG_STATUS?.find(
          (item) => item.status === String(text),
        );
        return (
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
      },
    },
  ];

  const expandedRowRender = (record: API.UserInfo) => {
    const data: API.InnerOrderDetail[] =
      record?.id && innerData?.hasOwnProperty(record?.id)
        ? innerData[record.id]
        : [];
    return (
      <ProTable
        columns={innderColumns}
        headerTitle={false}
        search={false}
        options={false}
        dataSource={data}
        pagination={false}
      />
    );
  };

  const handleToggleCollose = () => {
    // @ts-ignore
    const currentExpandRows: IExpandRow[] = !isColloseAll
      ? tableData?.map((item) => item.id)
      : [];
    setIsColloseAll(!isColloseAll);
    setExpandedRowKeys(currentExpandRows);
  };

  const handleExpandChange = (keys: React.Key[]): void => {
    const isAllExpand: boolean =
      keys?.length > 0 && keys?.length === tableData?.length;
    const rowsExpandNew: readonly React.Key[] = keys.filter(
      (item) => !expandedRowKeys.includes(item),
    );
    setExpandedRowKeys(keys);
    setIsColloseAll(isAllExpand);
    // 批量查询子表格
    console.log('批量查询子表格', rowsExpandNew);
  };

  const handleExpand = (expanded: boolean, record: API.UserInfo) => {
    const isCollose = record?.id && innerData?.hasOwnProperty(record?.id);
    let data = [];
    let currentInnerData: API.IInnerTableRow = { ...innerData };
    if (expanded && record?.id && !isCollose) {
      // 展开 && 未被展开过 -> 查询接口
      for (let i = 0; i < 3; i += 1) {
        data.push({
          key: i,
          date: '2014-12-24 23:12:00',
          name: 'This is production name',
          upgradeNum: 'Upgraded: 56',
        });
      }
      currentInnerData = {
        ...currentInnerData,
        [record.id]: data,
      };
    }
    setInnerData(currentInnerData);
  };

  return (
    <PageContainer className="my-page-container">
      <ProTable<API.UserInfo>
        headerTitle={
          <div className="table-collose-all" onClick={handleToggleCollose}>
            <Tooltip
              placement="top"
              title={isColloseAll ? '点击全部收起' : '点击全部展开'}
            >
              {isColloseAll ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
            </Tooltip>
          </div>
        }
        actionRef={actionRef}
        rowKey="id"
        tableClassName="my-table"
        search={{
          labelWidth: 100,
          defaultCollapsed: false,
          className: 'my-search',
        }}
        request={async (params, sorter, filter) => {
          console.log('params', params);
          const { data, success } = await queryOrderList({
            ...params,
            // FIXME: remove @ts-ignore
            // @ts-ignore
            sorter,
            filter,
          });
          setTableData(data?.list || []);
          return {
            data: data?.list || [],
            success,
          };
        }}
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandAllRows: false,
          expandedRowKeys,
          // @ts-ignore
          onExpandedRowsChange: handleExpandChange,
          onExpand: handleExpand,
        }}
      ></ProTable>
    </PageContainer>
  );
};

export default OrderList;
