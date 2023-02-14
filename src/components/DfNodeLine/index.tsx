import { memo, useMemo } from 'react';
import { Tooltip } from 'antd';
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
    props.onChange(nodeInfo);
  };

  const renderLineTips = (nodeInfo: any) => {
    return nodeInfo?.descList?.map((i: any) => (
      <div className="" key={i.key}>
        <span>{i.key}: </span>
        <span className="m-l-5">{i.value}</span>
      </div>
    ));
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
                activeKeys?.length > 0 && activeKeys?.includes(node.key)
                  ? 'active'
                  : ''
              }`}
              key={node.key}
              onClick={() => handleCheck(node)}
            >
              <Tooltip title={() => renderLineTips(node)} placement="right">
                <div className="step-name flex-row-start-center">
                  <span className="circle flex-row-center-center">
                    {activeKeys?.length > 0 &&
                      activeKeys?.includes(node.key) && (
                        <CheckOutlined className="check-icon" />
                      )}
                  </span>
                  <span className="name">{node.name}</span>
                </div>
              </Tooltip>
              <span className="step-desc">{node.value}</span>
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
