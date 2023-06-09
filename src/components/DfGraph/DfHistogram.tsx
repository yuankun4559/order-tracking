import React, { memo, useEffect, useState } from 'react';
import { message } from 'antd';
import { Chart } from '@antv/g2';

import { Consumer } from '@/context';

import servicesOrder from '@/services/order';
const { getAlertGraph } = servicesOrder.OrderController;

let gContext: any;
const DfHistogram = (props: any) => {
  const { dataId, wrapperClassName = '', url = '', title = '' } = props;

  const [gChart, setGchart] = useState<any>();

  const initChartData = async () => {
    try {
      const {
        pOrderType = '',
        pEarlyWarningCode = '',
        pEarlyWarningLevel = '',
        pActiveKeys = [],
      } = gContext;
      const combinationConditionList = pActiveKeys?.map((key: any) => ({
        orderType: key.split('@')[0],
        subHangUpStatus: key.split('@')[1],
      }));
      const params = {
        combinationConditionList,
        orderType: pOrderType,
        earlyWarningCode: pEarlyWarningCode,
        earlyWarningLevel: pEarlyWarningLevel,
      };
      const resData = await getAlertGraph(url, params);
      let data = (resData || []).map((item: any) => ({
        ...item,
        value: Number(item.value),
      }));
      let chart = gChart;
      if (!chart) {
        chart = new Chart({
          container: dataId,
          forceFit: true,
          height: 260,
          padding: [40, 'auto', 'auto', 'auto'],
        });
        setGchart(chart);
      }
      chart.source(data);
      chart.axis('title', {
        label: {
          textStyle: {
            fill: '#aaaaaa',
          },
          fontSize: 8,
          autoRotate: true,
          formatter: (val: any) => {
            return val?.length > 8 ? val.substring(1, 8) : val;
          },
        },
        tickLine: {
          alignWithLabel: true,
          length: 0,
        },
      });

      chart.axis('value', {
        label: {
          textStyle: {
            fill: '#aaaaaa',
          },
        },
        fontSize: 8,
      });
      chart.tooltip({
        showTitle: false,
      });
      chart.legend(false);

      chart
        .interval()
        .position('title*value')
        .opacity(1)
        .color('title', [
          '#1890ff',
          '#37c661',
          '#fbce1e',
          '#2b3b79',
          '#8a4be2',
          '#1dc5c5',
        ])
        .label('value', {
          autoRotate: true,
          fontSize: 10,
          textStyle: {
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)',
          },
        });

      chart.render();
    } catch (err: any) {
      message.error(err?.message || err);
    }
  };

  useEffect(() => {
    initChartData();
    return () => {
      gContext = null;
      setGchart(undefined);
    };
  }, [dataId]);

  return (
    <Consumer>
      {(context: any) => {
        gContext = context;
        return (
          <div className={`histogram-wrapper ${wrapperClassName}`}>
            <div className="histogram-title">{title}</div>
            <div id={dataId}></div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default memo(DfHistogram);
