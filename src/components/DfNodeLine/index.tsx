import { memo, useMemo } from 'react';
import { message, Tooltip } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import './index.less';

const DfNodeLine = (props: any) => {
  const {
    pClassName = '',
    title = 'R1节点',
    unitName = '单量',
    activeKeys = -1,
    data = [],
  } = props;

  /**
   * @description: 节点选择/取消
   * @param {any} nodeInfo
   */
  const handleCheck = (nodeInfo: any) => {
    if (!nodeInfo?.fulfilledOrderVolume) {
      message.warning('该节点当前单量为0, 无更多信息!');
      return;
    }
    props.onChange(nodeInfo);
  };

  const renderLineTips = (nodeInfo: any) => {
    return (
      <div className="title-tooltip">
        <div className="title-line">
          <span>节点说明: </span>
          <span className="m-l-5">{nodeInfo.nodeDescription}</span>
        </div>
        <div className="title-line">
          <span>负责部门: </span>
          <span className="m-l-5">{nodeInfo.responsibleDepartment}</span>
        </div>
        <div className="title-line">
          <span>所涉系统: </span>
          <span className="m-l-5">{nodeInfo.systemsInvolved}</span>
        </div>
      </div>
    );
  };

  const renderLineBody = useMemo(() => {
    return (
      <div
        className={`step-content ${
          activeKeys?.length > 0 ? 'has-checked' : ''
        }`}
      >
        {data?.map((node: any) => {
          return (
            <div
              className={`step-item flex-row-between-center ${
                node.fulfilledOrderVolume === 0 ? 'disabled' : ''
              }  ${
                activeKeys?.length > 0 && activeKeys?.includes(node.key)
                  ? 'active'
                  : ''
              }`}
              key={node.key}
              onClick={() => handleCheck(node)}
            >
              <Tooltip title={() => renderLineTips(node)} placement="right">
                <div className="step-name flex-row-start-center">
                  <span className="circle flex-row-center-center flex-shrink-0">
                    {activeKeys?.length > 0 &&
                      activeKeys?.includes(node.key) && (
                        <CheckOutlined className="check-icon" />
                      )}
                  </span>
                  <span className="name">{node.subHangUpStatusDesc}</span>
                </div>
              </Tooltip>
              <span className="step-desc">{node.fulfilledOrderVolume}</span>
            </div>
          );
        })}
      </div>
    );
  }, [activeKeys, data]);

  return (
    <div className={`defined-node-line ${pClassName}`}>
      <div className="step-title flex-row-between-center">
        <span>【{title}】</span>
        <span>【{unitName}】</span>
      </div>
      {renderLineBody}
    </div>
  );
};
export default memo(DfNodeLine);
