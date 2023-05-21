import React, { memo } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

import './index.less';
// import { useModel } from '@umijs/max';

const HomePage = () => {
  // const { count, decrement } = useModel('counter');
  // console.log('count:', count);

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
        HomePage welcome!~
      </div>
    </PageContainer>
  );
};

export default memo(HomePage);
