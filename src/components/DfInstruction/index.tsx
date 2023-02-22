import { memo, useEffect, useState } from 'react';
import { Table } from 'antd';
import servicesOrder from '@/services/order';
const { getRulesData } = servicesOrder.OrderController;

const DfInstruction = () => {
  const [rules, setRules] = useState([]);
  const columns = [
    {
      title: '预警名',
      dataIndex: 'earlyWarningName',
      key: 'earlyWarningName',
      width: 200,
    },
    {
      title: '预警规则',
      dataIndex: 'earlyWarningTooltips',
      key: 'earlyWarningTooltips',
    },
  ];

  useEffect(() => {
    (async () => {
      const data = await getRulesData();
      setRules(data || []);
    })();
  }, []);

  return (
    <Table
      rowKey="earlyWarningName"
      dataSource={rules}
      columns={columns}
      pagination={false}
      scroll={{ y: 520 }}
    />
  );
};

export default memo(DfInstruction);
