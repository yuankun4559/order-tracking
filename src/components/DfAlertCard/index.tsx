import { memo } from 'react';
import {
  ClockCircleOutlined,
  WarningOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { Row, Col, Tooltip } from 'antd';
// import { CARD_LEVEL_ENUMS } from '@/utils/graphEnum';
// import { ALERT_NOMAL, ALERT_WARNING, ALERT_ERROR } from './enum';
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
    earlyWarningCode = 0, // code
    earlyWarningLevel = 0, // 预警等级 10:红 20:橙  30:黄  40:蓝
    earlyWarningTooltips = '',
    onChange,
  } = props;

  // const renderCardLevelText = useMemo(() => {
  //   return earlyWarningLevel && CARD_LEVEL_ENUMS[earlyWarningLevel]['level'];
  // }, [earlyWarningLevel]);

  const renderCardHeader = (
    <div className="w-100 df-card-header flex-row-center-center">
      {earlyWarningCode === 100 && (
        <ClockCircleOutlined className="fs-14 m-r-5" />
      )}
      {earlyWarningCode === 110 && <WarningOutlined className="fs-14 m-r-5" />}
      {earlyWarningCode === 120 && <StopOutlined className="fs-14 m-r-5" />}
      <span>{cardTitle}</span>
      {earlyWarningCode <= 120 && <span>({`${cardTitleVal}%`})</span>}
    </div>
  );

  const renderCardBody = (
    <div className="w-100 df-card-body">
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

  return (
    <Tooltip title={earlyWarningTooltips}>
      <div
        className={`h-100 flex-col-between-start defined-alert-card pointer ${className} dac-${earlyWarningLevel} ${
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
