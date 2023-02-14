import React, { memo, useEffect, useMemo, useState } from 'react';
import { Button, Select, Drawer } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import { FileExclamationOutlined } from '@ant-design/icons';

import { ORDER_TYPES } from '@/utils/enum';
import './index.less';
import DfNodeLine from '@/components/DfNodeLine';
import DfAlertCard from '@/components/DfAlertCard';
import DfModalInstruction from '@/components/DfModalInstruction';
import CardDetailDrawer from './components/CardDetailDrawer';

const dfR1 = [
  {
    name: '待支付',
    key: 1,
    value: 233,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
  {
    name: 'OMS待下发',
    key: 2,
    value: 33,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
  {
    name: '等待调拨',
    key: 3,
    value: 21,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
];
const dfR4 = [
  {
    name: '待支付',
    key: 11,
    value: 82,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
  {
    name: 'OMS待下发',
    key: 12,
    value: 68,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
  {
    name: '等待调拨',
    key: 13,
    value: 73,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
];
const dfR5 = [
  {
    name: '待支付',
    key: 21,
    value: 82,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
  {
    name: 'OMS待下发',
    key: 22,
    value: 82,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
  {
    name: '等待调拨',
    key: 23,
    value: 82,
    descList: [
      {
        key: '节点说明',
        value: '不数不胜数速度',
      },
      {
        key: '负责部门',
        value: '啊是范加尔夫鹅苦痛和苏俄u',
      },
    ],
  },
];
const dfData1 = [
  {
    key: 1,
    cardKey: 1,
    name: '正常时效内',
    percent: 78,
  },
  {
    key: 2,
    cardKey: 2,
    name: '超时未收货',
    percent: 22,
  },
  {
    key: 3,
    cardKey: 3,
    name: '严重超时未收货',
    percent: 3,
  },
];
const dfData2: any = [
  {
    key: 4,
    cardKey: 4,
    name: '正常时效内',
  },
  {
    key: 13,
    cardKey: 13,
    name: '严重超时未收货',
  },
  {
    key: 5,
    cardKey: 5,
    name: '超时未收货',
  },
  {
    key: 15,
    cardKey: 3,
    name: '严重超时未收货',
  },
];
const OrderDashboard = () => {
  const [orderType, setOrderType] = useState('');
  const [activeKeys, setActiveKeys] = useState([]);
  const [orderNodeR1, setOrderNodeR1] = useState(dfR1);
  const [orderNodeR4, setOrderNodeR4] = useState(dfR4);
  const [orderNodeR5, setOrderNodeR5] = useState(dfR5);

  const [warningData, setWarningData] = useState(dfData1); // 时效监控数据
  const [alertData, setAlertData] = useState(dfData2); // 时效预警数据

  const [isInstructionModalVisble, setIsInstructionModalVisble] =
    useState(false); // 操作说明弹窗

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [cardCheckedInfo, setCardCheckedInfo] = useState<AlertCardInfo>();

  useEffect(() => {
    console.log('条件变更，重新查询节点单量分布', orderType, activeKeys);
  }, [orderType, activeKeys]);

  /**
   * @description: 订单类型改变
   * @param {any} value
   */
  const handleOTChange = (value: any) => {
    setOrderType(value);
    setActiveKeys([]);
  };

  /**
   * @description: 选择/取消选择节点
   * @param {any} nodeData
   */
  const handleLineChange = (nodeData: any) => {
    let cActiveKeys: any[] = [...activeKeys];
    const keyIndex = cActiveKeys.findIndex((i: any) => nodeData?.key === i);
    if (keyIndex > -1) {
      // 第二次点击（取消选择）
      cActiveKeys.splice(keyIndex, 1);
    } else {
      // 第一次点击（点击选择）
      cActiveKeys.push(nodeData.key);
    }
    setActiveKeys(cActiveKeys);
  };

  /**
   * @description: 选择预警卡片
   * @param {AlertCardInfo} cardInfo
   */
  const handleCardCheck = (cardInfo: AlertCardInfo): void => {
    console.log('======cardInfo======', cardInfo, cardCheckedInfo);
    setCardCheckedInfo(cardInfo);
    setIsDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerVisible(false);
    setCardCheckedInfo(undefined);
  };

  const renderBoxHeader = useMemo(() => {
    return (
      <div className="title fs-16 flex-row-between-center">
        <span>各节点单量分布</span>
        {activeKeys?.length > 0 && (
          <span
            className="deselect-btn fs-14 pointer"
            onClick={() => setActiveKeys([])}
          >
            取消选择
          </span>
        )}
      </div>
    );
  }, [activeKeys]);

  const renderBoxLeft = useMemo(() => {
    return (
      <div className="box-left flex-flex1">
        <DfNodeLine
          nodeType="R1"
          title="R1节点"
          unitName="单量"
          activeKeys={activeKeys}
          // hasChecked={activeKeys !== -1}
          data={orderNodeR1}
          onChange={handleLineChange}
        />
      </div>
    );
  }, [activeKeys]);

  const renderBoxRight = useMemo(() => {
    return (
      <div className="box-right flex-flex1">
        {orderNodeR4?.length > 0 && (
          <DfNodeLine
            nodeType="R4"
            title="R4节点"
            unitName="单量"
            activeKeys={activeKeys}
            data={orderNodeR4}
            onChange={handleLineChange}
          />
        )}

        {orderNodeR5?.length > 0 && (
          <DfNodeLine
            nodeType="R5"
            title="R5节点"
            unitName="单量"
            pClassName="m-t-30"
            activeKeys={activeKeys}
            data={orderNodeR5}
            onChange={handleLineChange}
          />
        )}
      </div>
    );
  }, [orderNodeR4, orderNodeR5, activeKeys]);

  const renderMonitorWarning = useMemo(() => {
    return (
      <ProCard gutter={16} wrap>
        {warningData?.map((item: AlertCardInfo) => (
          <ProCard
            key={item.key}
            colSpan={{ xs: 24, sm: 24, md: 24, lg: 12, xl: 8 }}
          >
            <DfAlertCard
              key={item.key}
              activeKey={cardCheckedInfo?.cardKey}
              cardKey={item.cardKey}
              cardTitle={item.name}
              cardTitleVal={item.percent}
              onChange={() => handleCardCheck(item)}
            />
          </ProCard>
        ))}
      </ProCard>
    );
  }, [warningData, cardCheckedInfo]);

  const renderMonitorAlert = useMemo(() => {
    return (
      <ProCard gutter={16} wrap>
        {alertData?.map((item: AlertCardInfo) => (
          <ProCard
            key={item.key}
            colSpan={{ xs: 24, sm: 24, md: 24, lg: 12, xl: 8 }}
            style={{ paddingBlockEnd: 12 }}
          >
            <DfAlertCard
              key={item.key}
              activeKey={cardCheckedInfo?.cardKey}
              cardKey={item.cardKey}
              cardTitle={item.name}
              cardTitleVal={item.percent}
              onChange={() => handleCardCheck(item)}
            />
          </ProCard>
        ))}
      </ProCard>
    );
  }, [alertData, cardCheckedInfo]);

  return (
    <PageContainer
      className="dashboard-page-container"
      header={{ title: '履约看板(进行中订单)' }}
      extra={[
        <Button type="link" className="info-desc" key="desc">
          数据每小时准点更新
        </Button>,
      ]}
    >
      <div className="flex-col-start-start order-dashboard">
        <div className="order-filter">
          <Select
            value={orderType}
            options={ORDER_TYPES}
            onChange={handleOTChange}
            style={{ width: 150 }}
          />
        </div>
        <div className="order-container flex-flex1 flex-row-start-start">
          {/* 左侧-分布情况 */}
          <div className="flex-distribution flex-col-start-start align-items-stretch">
            {renderBoxHeader}
            <div className="content flex-row-start-start">
              {/* R1 */}
              {renderBoxLeft}
              {/* R5、R5 */}
              {renderBoxRight}
            </div>
          </div>
          {/* 右侧-预警统计 */}
          <div className="flex-early-warning flex-flex1">
            {/* 时效监控 */}
            <div className="prescription-monitor">
              <div className="flex-row-between-center m-b-10">
                <span className="title fs-16">{`端到端实效(下单->收货)监控`}</span>
                <div
                  className="extra-instructions pointer flex-row-end-center"
                  onClick={() => setIsInstructionModalVisble(true)}
                >
                  <FileExclamationOutlined />
                  <span className="text">预警规则说明</span>
                </div>
              </div>
              <div className="content flex-row-start-start flex-item-stretch">
                {renderMonitorWarning}
              </div>
            </div>
            {/* 时效预警 */}
            <div className="prescription-warning">
              <div className="title m-b-10 fs-16">各节点时效预警</div>
              {renderMonitorAlert}
            </div>
          </div>
        </div>
      </div>
      {/* 说明弹窗 */}
      {isInstructionModalVisble && (
        <DfModalInstruction
          open={isInstructionModalVisble}
          onOk={() => setIsInstructionModalVisble(false)}
          onCancel={() => setIsInstructionModalVisble(false)}
        />
      )}
      {/* 明细数据面板 */}
      {isDrawerVisible && (
        <CardDetailDrawer
          open={isDrawerVisible}
          title={cardCheckedInfo?.name}
          transData={cardCheckedInfo}
          height={800}
          onClose={handleDrawerClose}
        />
      )}
    </PageContainer>
  );
};

export default memo(OrderDashboard);
