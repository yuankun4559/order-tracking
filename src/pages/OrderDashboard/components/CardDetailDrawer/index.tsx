import { memo, useMemo } from 'react';
import { Drawer } from 'antd';

import OrderList from '@/pages/OrderList';
import GraphBox from '../GraphBox';

import { Provider } from '@/context';

import styles from './index.less';

const CardDetailDrawer = (props: IDrawer) => {
  const {
    open = false,
    title = '',
    height = 400,
    wrapClassName = '', // 当前卡片详细信息、订单类型、节点等数据
    transData,
    orderType = '',
    activeKeys = [],
    onClose,
  } = props;

  const transParams = useMemo(() => {
    const combinationConditionList = activeKeys?.map((key: any) => ({
      orderType: key.split('@')[0],
      subHangUpStatus: key.split('@')[1],
    }));
    return {
      combinationConditionList,
      orderType,
    };
  }, [activeKeys, orderType]);

  return (
    <Drawer
      title={title}
      height={height}
      placement="bottom"
      closable={true}
      onClose={onClose}
      open={open}
      className={`${styles.dfDrawerModal} ${wrapClassName}`}
    >
      {transData && transData?.earlyWarningCode && (
        <Provider
          value={{
            pOrderType: orderType,
            pActiveKeys: activeKeys,
            pEarlyWarningCode: transData?.earlyWarningCode,
          }}
        >
          <GraphBox
            earlyWarningCode={transData?.earlyWarningCode}
            orderType={orderType}
            activeKeys={activeKeys}
          />
        </Provider>
      )}
      <OrderList from="DRAWER" transParams={transParams} />
    </Drawer>
  );
};

export default memo(CardDetailDrawer);
