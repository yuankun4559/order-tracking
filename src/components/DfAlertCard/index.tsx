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
    cardTitle = '',
    cardTitleVal = 78,
    fulfilledOrderVolume = 0,
    customerNumber = 0,
    gmv = 0,
    earlyWarningTooltips = '',
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
            <span className="text flex-shrink-0">单量: </span>
            <span className="value m-l-5">{fulfilledOrderVolume}</span>
          </div>
        </Col>
        <Col span={12}>
          <div className="flex-row-start-center">
            <span className="text flex-shrink-0">客户数: </span>
            <span className="value m-l-5">{customerNumber}</span>
          </div>
        </Col>
        <Col span={24}>
          <div className="flex-row-start-center">
            <span className="text flex-shrink-0">GMV: </span>
            <span className="value m-l-5">{gmv}</span>
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
    <Tooltip title={earlyWarningTooltips}>
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
