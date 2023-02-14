import { memo } from 'react';
import { Table } from 'antd';
import rules from './ruleData';

const DfInstruction = () => {
  const columns = [
    {
      title: '预警名',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: '预警规则',
      dataIndex: 'rule',
      key: 'rule',
    },
  ];
  return (
    <Table
      rowKey="name"
      dataSource={rules}
      columns={columns}
      pagination={false}
    />
  );
};

export default memo(DfInstruction);
