import { memo, useMemo } from 'react';
import {
  ClockCircleOutlined,
  WarningOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { Row, Col, Tooltip } from 'antd';
import { ALERT_NOMAL, ALERT_WARNING, ALERT_ERROR } from './enum';
import './index.less';

const DfAlertCard = (props: IntAlertCard) => {
  const {
    cardKey = '',
    activeKey = '',
    className = '',
    cardTitle = '正常时效内',
    cardTitleVal = 78,
    desc = '你好什么不给发货发布会上个网v好的啦啦\n患得患失艴然不悦共商国是他问我ss\n',
    onChange,
  } = props;

  const renderCardHeader = (
    <div className="df-card-header flex-row-center-center c-white">
      {cardKey === 1 && <ClockCircleOutlined className="fs-20" />}
      {cardKey === 2 && <WarningOutlined className="fs-20" />}
      {cardKey === 3 && <StopOutlined className="fs-20" />}
      <span className="m-l-5">{cardTitle}</span>
      {cardKey <= 3 && <span>({`${cardTitleVal}%`})</span>}
    </div>
  );

  const renderCardBody = (
    <div className="df-card-body">
      <Row>
        <Col span={12}>
          <div className="flex-row-start-center">
            <span className="fs-10 flex-shrink-0">单量: </span>
            <span className="fs-16 m-l-5">82</span>
          </div>
        </Col>
        <Col span={12}>
          <div className="flex-row-start-center">
            <span className="fs-10 flex-shrink-0">客户数: </span>
            <span className="fs-16 m-l-5">321</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="flex-row-start-center">
            <span className="fs-10 flex-shrink-0">GMV: </span>
            <span className="fs-16 m-l-5">3892</span>
          </div>
        </Col>
      </Row>
    </div>
  );

  const cardColor = useMemo(() => {
    let color = '';
    if (ALERT_NOMAL.includes(Number(cardKey))) {
      color = 'nomal';
    } else if (ALERT_WARNING.includes(Number(cardKey))) {
      color = 'warning';
    } else if (ALERT_ERROR.includes(Number(cardKey))) {
      color = 'error';
    }
    return color;
  }, [cardKey]);

  return (
    <Tooltip title={desc}>
      <div
        className={`defined-alert-card pointer ${className} ${cardColor} ${
          activeKey === cardKey ? 'is-active' : ''
        }`}
        key={cardKey}
        onClick={onChange}
      >
        {renderCardHeader}
        {renderCardBody}
      </div>
    </Tooltip>
  );
};

export default memo(DfAlertCard);
