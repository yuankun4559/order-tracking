import React, { memo, useEffect, useState } from 'react';
import { message } from 'antd';
import { Chart } from '@antv/g2';

import { Consumer } from '@/context';

import servicesOrder from '@/services/order';
const { getAlertGraph } = servicesOrder.OrderController;

let gContext: any;
const DfPie = (props: any) => {
  const { dataId, wrapperClassName = '', url = '', title = '' } = props;
  const isQuarter: boolean = wrapperClassName.indexOf('quarter') > -1;

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
          padding: isQuarter ? 'auto' : ['auto', 100, 'auto', 'auto'],
        });
        setGchart(chart);
      }

      chart.source(data);
      chart.legend({
        position: isQuarter ? 'bottom-center' : 'right-center',
        offsetX: isQuarter ? '' : -100,
      });
      chart.coord('theta', {
        radius: 0.75,
      });

      chart.tooltip({
        showTitle: false,
      });
      chart
        .intervalStack()
        .position('value')
        .color('title', [
          '#1890ff',
          '#37c661',
          '#fbce1e',
          '#2b3b79',
          '#8a4be2',
          '#1dc5c5',
        ])
        .style({
          stroke: 'white',
          lineWidth: 1,
        })
        .label('value', {
          offset: -30,
          autoRotate: true,
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
          <div className={`pie-wrapper ${wrapperClassName}`}>
            <div className="pie-title">{title}</div>
            <div id={dataId}></div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default memo(DfPie);
