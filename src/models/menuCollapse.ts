// 全局共享数据示例
import { DEFAULT_GLOBAL_COLLAPSE } from '@/constants';
import { useState } from 'react';

// useCollapse
export default () => {
  const [gCollapse, setGCollapse] = useState<boolean>(DEFAULT_GLOBAL_COLLAPSE);
  return {
    gCollapse,
    setGCollapse,
  };
};
