import React, { memo, useEffect, useMemo, useState } from 'react';
import { Button, Select, message, Spin } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { ProCard } from '@ant-design/pro-components';
import { FileExclamationOutlined } from '@ant-design/icons';

import { ORDER_TYPES } from '@/utils/enum';
import { formatDataKey } from '@/utils/util';

import DfNodeLine from '@/components/DfNodeLine';
import DfAlertCard from '@/components/DfAlertCard';
import DfModalInstruction from '@/components/DfModalInstruction';
import CardDetailDrawer from './components/CardDetailDrawer';

import servicesOrder from '@/services/order';
const { getOrderDistribution, getOrderPrescription } =
  servicesOrder.OrderController;

import './index.less';
// import { useModel } from '@umijs/max';

const OrderDashboard = () => {
  // const { count, decrement } = useModel('counter');
  // console.log('count:', count);
  const [orderType, setOrderType] = useState('');
  const [activeKeys, setActiveKeys] = useState<number[]>([]);

  const [isDistributionLoading, setIsDistributionLoading] =
    useState<boolean>(false);
  const [orderNodeR1, setOrderNodeR1] = useState<OD.IOrderDistributionItem[]>(
    [],
  ); // r1 单量数据
  const [orderNodeR4, setOrderNodeR4] = useState<OD.IOrderDistributionItem[]>(
    [],
  ); // r4 单量数据
  const [orderNodeR5, setOrderNodeR5] = useState<OD.IOrderDistributionItem[]>(
    [],
  ); // r5 单量数据

  const [warningData, setWarningData] = useState<OD.IOrderPrescriptionItem[]>(
    [],
  ); // 时效监控数据
  const [alertData, setAlertData] = useState<OD.IOrderPrescriptionItem[]>(); // 时效预警数据

  const [isInstructionModalVisble, setIsInstructionModalVisble] =
    useState(false); // 操作说明弹窗
  const [isMonitorLoading, setIsMonitorLoading] = useState<boolean>(false);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [cardCheckedInfo, setCardCheckedInfo] =
    useState<OD.IOrderPrescriptionItem>();

  /**
   * @description: 查询左侧单量分布
   */
  const initDistributionData = async () => {
    try {
      setIsDistributionLoading(true);
      const nodeData = await getOrderDistribution({ orderType });
      let additionalProperties1 = nodeData.hasOwnProperty(1) ? nodeData[1] : [];
      additionalProperties1 = formatDataKey(
        additionalProperties1 || [],
        '1',
        'subHangUpStatus',
      );
      setOrderNodeR1(additionalProperties1);

      let additionalProperties4 = nodeData.hasOwnProperty(4) ? nodeData[4] : [];
      additionalProperties4 = formatDataKey(
        additionalProperties4 || [],
        '4',
        'subHangUpStatus',
      );
      setOrderNodeR4(additionalProperties4);

      let additionalProperties5 = nodeData.hasOwnProperty(5) ? nodeData[5] : [];
      additionalProperties5 = formatDataKey(
        additionalProperties5 || [],
        '5',
        'subHangUpStatus',
      );
      setOrderNodeR5(additionalProperties5);
      setIsDistributionLoading(false);
    } catch (err: any) {
      message.error(err?.message || err);
      setIsDistributionLoading(false);
    }
  };

  /**
   * @description: 查询右侧失效监控
   */
  const initPrescriptionData = async () => {
    try {
      const combinationConditionList = activeKeys?.map((key: any) => ({
        orderType: key.split('@')[0],
        subHangUpStatus: key.split('@')[1],
      }));
      const params = {
        combinationConditionList,
        orderType,
      };
      setIsMonitorLoading(true);
      const cardData = await getOrderPrescription(params);
      if (JSON.stringify(cardData) !== '{}') {
        if (cardData.hasOwnProperty('1')) {
          // 端到端时效
          setWarningData(cardData['1']);
        }
        if (cardData.hasOwnProperty('2')) {
          // 节点时效
          setAlertData(cardData['2']);
        }
      }
      setIsMonitorLoading(false);
      console.log('aaaaa', cardData);
    } catch (err: any) {
      setIsMonitorLoading(false);
      message.error(err?.message || err);
    }
  };

  useEffect(() => {
    console.log('订单类型条件变更，重新查询节点单量分布', orderType);
    initDistributionData(); //
  }, [orderType]);

  useEffect(() => {
    console.log('选节点条件变更，重新查询节点时效分布', orderType, activeKeys);
    initPrescriptionData(); //
  }, [activeKeys]);

  /**
   * @description: 订单类型改变
   * @param {any} value
   */
  const handleOTChange = (value: any) => {
    console.log('value', value);
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
   * @param {AlertCardInfo} cInfo
   */
  const handleCardCheck = (cInfo: OD.IOrderPrescriptionItem): void => {
    console.log('cInfo', cInfo);

    setCardCheckedInfo(cInfo);
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
    return orderNodeR1?.length === 0 ? null : (
      <div className="box-left flex-flex1">
        <DfNodeLine
          nodeType="R1"
          title="R1节点"
          unitName="单量"
          activeKeys={activeKeys}
          data={orderNodeR1}
          onChange={handleLineChange}
        />
      </div>
    );
  }, [activeKeys, orderNodeR1]);

  const renderBoxRight = useMemo(() => {
    return (
      <div className="box-right flex-flex1">
        {orderNodeR4?.length > 0 && (
          <DfNodeLine
            nodeType="R4"
            title="R4节点"
            unitName="单量"
            pClassName="m-b-30"
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
        {warningData?.map((item: OD.IOrderPrescriptionItem) => (
          <ProCard
            key={`${item.earlyWarningCode}@${item.earlyWarningLevel}`}
            colSpan={{ xs: 24, sm: 24, md: 24, lg: 12, xl: 8, xxl: 6 }}
            style={{ paddingBlockEnd: 12 }}
          >
            <DfAlertCard
              {...item}
              cardKey={`${item.earlyWarningCode}@${item.earlyWarningLevel}`}
              activeKey={`${item.earlyWarningCode}@${item.earlyWarningLevel}`}
              cardTitle={item.earlyWarningName}
              cardTitleVal={item.percent || 0}
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
        {alertData?.map((item: OD.IOrderPrescriptionItem) => (
          <ProCard
            key={`${item.earlyWarningCode}@${item.earlyWarningLevel}`}
            colSpan={{ xs: 24, sm: 24, md: 24, lg: 12, xl: 8, xxl: 6 }}
            style={{ paddingBlockEnd: 12 }}
          >
            <DfAlertCard
              {...item}
              key={item.earlyWarningCode}
              cardKey={`${item.earlyWarningCode}@${item.earlyWarningLevel}`}
              activeKey={`${item.earlyWarningCode}@${item.earlyWarningLevel}`}
              cardTitle={item.earlyWarningName}
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
            <Spin spinning={isDistributionLoading} delay={100}>
              {renderBoxHeader}
              <div className="content flex-row-between-start">
                {/* R1 */}
                {renderBoxLeft}
                {/* R5、R5 */}
                {renderBoxRight}
              </div>
            </Spin>
          </div>

          {/* 右侧-预警统计 */}
          <div className="flex-early-warning flex-flex1">
            <Spin spinning={isMonitorLoading} delay={100}>
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
            </Spin>
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
          title={cardCheckedInfo?.earlyWarningName}
          transData={cardCheckedInfo}
          activeKeys={activeKeys}
          orderType={orderType}
          // height={calc('100vh' - '120px')}
          onClose={handleDrawerClose}
        />
      )}
    </PageContainer>
  );
};

export default memo(OrderDashboard);
