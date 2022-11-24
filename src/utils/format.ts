// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

/**
 * @description: 保留小数点后位数
 * @param {number} 原数据
 * @param {number} 保留的小数点位数
 * @return {number}
 */
export const formatDecimal = (num: number, decimal: number) => {
  let numStr = num.toString();
  let index = numStr.indexOf('.');
  if (numStr === '') {
    return '';
  }
  if (index !== -1) {
    numStr = numStr.substring(0, decimal + index + 1);
  } else {
    numStr = numStr.substring(0);
  }
  return parseFloat(numStr).toFixed(decimal);
};
