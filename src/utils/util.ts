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

export const formatDataKey = (
  dataList: any[],
  linkStr: string,
  attribute: string,
  linkSymbol: string = '@',
) => {
  return dataList?.map((item: any) => ({
    ...item,
    key: `${linkStr}${linkSymbol}${item[attribute]}`,
  }));
};

/**
 * @description: post请求下载文件
 * @param {string} url
 * @param {TypeKeyValue} params
 */
export const downloadFilePost = (url: string, params: TypeKeyValue) => {
  let form: any = document.createElement('form');
  form.style.display = 'none';
  form.action = url;
  form.method = 'POST';
  document.body.appendChild(form);

  // 动态创建input并给value赋值
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      let input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = params[key];
      form.appendChild(input);
    }
  }
  form.submit();
  form.remove();
};

/**
 * @description: 添加请求头的文件下载
 * @param {string} url
 * @param {any} dFileName 文件名
 */
export function downloadFileWithRQHeader(url: string, dFileName: string) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.setRequestHeader('Authorization', ''); // 自定义请求头
  xhr.setRequestHeader('X-Display-ChannelCode', ''); // 自定义请求头
  xhr.onload = function () {
    if (this.status === 200) {
      const blob = this.response;
      const fileName = dFileName || 'XXX模板.xlsx';
      // @ts-ignore
      if (window?.navigator?.msSaveOrOpenBlob) {
        // IE浏览器下
        // @ts-ignore
        navigator.msSaveBlob(blob, fileName);
      } else {
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
      }
    }
  };
  xhr.send();
}
