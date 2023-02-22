// 全局计数器 / 持久化 / 各页面共享数据 ---- 测试例子
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const { initialState }: any = useModel('@@initialState'); // initialState

  const [count, setCount] = useState<number>(initialState?.count);

  const increment = useCallback(() => {
    setCount((c: number) => c + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((c: number) => c - 1);
  }, []);
  useEffect(() => {
    setCount(initialState?.count);
  }, [initialState]);

  return {
    count,
    setCount,
    increment,
    decrement,
  };
};
