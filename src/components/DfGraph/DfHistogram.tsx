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
      };
      const resData = await getAlertGraph(url, params);
      const data = (resData || []).map((item: any) => ({
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
        },
        tickLine: {
          alignWithLabel: false,
          length: 0,
        },
      });
      chart.axis('value', {
        title: false,
        label: {
          textStyle: {
            fill: '#aaaaaa',
          },
        },
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
