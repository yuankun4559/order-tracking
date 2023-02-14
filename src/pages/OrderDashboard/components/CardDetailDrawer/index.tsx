import { memo } from 'react';
import { Drawer } from 'antd';
import OrderList from '@/pages/OrderList';
import styles from './index.less';

const CardDetailDrawer = (props: IDrawer) => {
  const {
    open = false,
    title = '',
    height = 400,
    wrapClassName = '', // 当前卡片详细信息、订单类型、节点等数据
    transData = {},
    onClose,
  } = props;

  return (
    <Drawer
      title={title}
      height={height}
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      className={`${styles.dfDrawerModal} ${wrapClassName}`}
    >
      <OrderList from="DRAWER" transData={transData} />
    </Drawer>
  );
};

export default memo(CardDetailDrawer);
