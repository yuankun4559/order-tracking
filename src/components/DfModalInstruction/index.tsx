import { memo } from 'react';
import { Modal } from 'antd';
import DfInstruction from '../DfInstruction';
import './index.less';

const DfModalInstruction = (props: IModal) => {
  const { open = false, onOk, onCancel } = props;

  return (
    <Modal
      title="预警规则说明"
      wrapClassName="df-modal-instruct"
      closable={true}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      width={1200}
      okText="关闭"
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <DfInstruction />
    </Modal>
  );
};

export default memo(DfModalInstruction);
