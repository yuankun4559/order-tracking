import { memo, useEffect, useState } from 'react';

import DfPie from '@/components/DfGraph/DfPie';
import DfHistogram from '@/components/DfGraph/DfHistogram';

import { GRAPH_TYPE, GRAPH_ENUMS, ALERT_CARD_ENUMS } from '@/utils/graphEnum';

import './index.less';

const GraphBox = (props: IGraphBox) => {
  const { earlyWarningCode = '' } = props;
  const [allChartsData, setAllChartsData] = useState<IGraphItem[]>([]);

  const initChartData = () => {
    if (earlyWarningCode && JSON.stringify(ALERT_CARD_ENUMS) !== '{}') {
      // 预警卡片有key
      const targetAlertGraph = ALERT_CARD_ENUMS[earlyWarningCode];
      const { charts = [] } = targetAlertGraph;
      const targetCharts: IGraphItem[] = GRAPH_ENUMS.filter(
        (item: IGraphItem) => charts.includes(item.key),
      );
      setAllChartsData(targetCharts);
    }
  };

  useEffect(() => {
    initChartData();
  }, [earlyWarningCode]);

  return (
    <>
      {allChartsData?.length > 0 && (
        <div className="graph-box-wrapper flex-row-start-start">
          {allChartsData?.map((item: IGraphItem) => {
            let result: any;
            if (item.type === GRAPH_TYPE['PIE']) {
              // 饼图
              result = (
                <DfPie
                  {...item}
                  dataId={item.key}
                  wrapperClassName={`chart-pie-wrapper ${
                    allChartsData?.length < 3 ? 'half' : 'quarter'
                  }`}
                />
              );
            } else if (item.type === GRAPH_TYPE['HISTOGRAM']) {
              // 柱状图
              result = (
                <DfHistogram
                  {...item}
                  dataId={item.key}
                  wrapperClassName="flex-flex1"
                />
              );
            }
            return result;
          })}
        </div>
      )}
    </>
  );
};
export default memo(GraphBox);
