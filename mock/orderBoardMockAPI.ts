const nodeData = {
  additionalProperties1: [
    {
      fulfilledOrderVolume: 21,
      nodeDescription: '待支付',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1010,
      subHangUpStatusDesc: '待支付',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 193,
      nodeDescription: 'OMS待下发',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1020,
      subHangUpStatusDesc: 'OMS待下发',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 0,
      nodeDescription: '待签收',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1030,
      subHangUpStatusDesc: '待签收',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 91,
      nodeDescription: '等待调拨',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1040,
      subHangUpStatusDesc: '等待调拨',
      systemsInvolved: 'systemsInvolved',
    },
  ],
  additionalProperties4: [
    {
      fulfilledOrderVolume: 21,
      nodeDescription: '待支付',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1010,
      subHangUpStatusDesc: '待支付',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 193,
      nodeDescription: 'OMS待下发',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1020,
      subHangUpStatusDesc: 'OMS待下发',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 0,
      nodeDescription: '待签收',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1030,
      subHangUpStatusDesc: '待签收',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 91,
      nodeDescription: '等待调拨',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1040,
      subHangUpStatusDesc: '等待调拨',
      systemsInvolved: 'systemsInvolved',
    },
  ],
  additionalProperties5: [
    {
      fulfilledOrderVolume: 21,
      nodeDescription: '待支付',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1010,
      subHangUpStatusDesc: '待支付',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 193,
      nodeDescription: 'OMS待下发',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1020,
      subHangUpStatusDesc: 'OMS待下发',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 0,
      nodeDescription: '待签收',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1030,
      subHangUpStatusDesc: '待签收',
      systemsInvolved: 'systemsInvolved',
    },
    {
      fulfilledOrderVolume: 91,
      nodeDescription: '等待调拨',
      responsibleDepartment: 'responsibleDepartment',
      subHangUpStatus: 1040,
      subHangUpStatusDesc: '等待调拨',
      systemsInvolved: 'systemsInvolved',
    },
  ],
}; // 节点类型数据

const cardData = {
  1: [
    {
      customerNumber: 72,
      fulfilledOrderVolume: 888,
      gmv: 9927,
      earlyWarningCode: 100,
      earlyWarningName: '正常时效内',
      earlyWarningLevel: 40,
    },
    {
      customerNumber: 12,
      fulfilledOrderVolume: 772,
      gmv: 882,
      earlyWarningCode: 110,
      earlyWarningName: '超时未收货',
      earlyWarningLevel: 20,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 12,
      fulfilledOrderVolume: 772,
      gmv: 882,
      earlyWarningCode: 120,
      earlyWarningName: '严重超时未收货',
      earlyWarningLevel: 10,
      earlyWarningTooltips: 'R1超时未揽件',
    },
  ],
  2: [
    {
      customerNumber: 12,
      fulfilledOrderVolume: 1,
      gmv: 83,
      earlyWarningCode: 130,
      earlyWarningName: '下单未支付',
      earlyWarningLevel: 10,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 12,
      fulfilledOrderVolume: 82,
      gmv: 1984,
      earlyWarningCode: 140,
      earlyWarningName: '调拨在途挂单',
      earlyWarningLevel: 10,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 12,
      fulfilledOrderVolume: 13,
      gmv: 782,
      earlyWarningCode: 150,
      earlyWarningName: '预售超时未发货',
      earlyWarningLevel: 20,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 12,
      fulfilledOrderVolume: 772,
      gmv: 882,
      earlyWarningCode: 160,
      earlyWarningName: '超卖挂单',
      earlyWarningLevel: 20,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 133,
      fulfilledOrderVolume: 92,
      gmv: 81,
      earlyWarningCode: 230,
      earlyWarningName: 'R1超时未揽件',
      earlyWarningLevel: 30,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 133,
      fulfilledOrderVolume: 92,
      gmv: 81,
      earlyWarningCode: 360,
      earlyWarningName: 'R4_平台(自配)超时未妥投',
      earlyWarningLevel: 30,
      earlyWarningTooltips: 'susueheh',
    },
    {
      customerNumber: 134,
      fulfilledOrderVolume: 92,
      gmv: 81,
      earlyWarningCode: 240,
      earlyWarningName: 'R1超时未揽件',
      earlyWarningLevel: 30,
      earlyWarningTooltips: 'R1超时未揽件',
    },
    {
      customerNumber: 135,
      fulfilledOrderVolume: 92,
      gmv: 81,
      earlyWarningCode: 250,
      earlyWarningName: 'R1超时未揽件',
      earlyWarningLevel: 30,
      earlyWarningTooltips: 'R1超时未揽件',
    },
  ],
}; // 卡片类型数据

const graphData = [
  {
    type: '维度1',
    value: 392,
  },
  {
    type: '维度2',
    value: 211,
  },
  {
    type: '维度3',
    value: 682,
  },
  {
    type: '维度4',
    value: 293,
  },
  {
    type: '维度5',
    value: 193,
  },
  {
    type: '维度6',
    value: 871,
  },
]; // 图形数据

export default {
  // 单量分布
  'POST /api/v3/orderDistribution': (req: any, res: any) => {
    const { orderType } = req.body;
    const targetAttr = `additionalProperties${orderType}`;
    res.json({
      success: true,
      data: !orderType
        ? nodeData
        : {
            [targetAttr]: nodeData[`additionalProperties${orderType}`],
          },
      code: 200,
      message: '',
      errMsg: '',
    });
  },
  // 时效分布
  'POST /api/v3/orderPrescription': (req: any, res: any) => {
    res.json({
      success: true,
      data: cardData,
      code: 200,
      message: '',
      errMsg: '',
    });
  },
  // 图表信息数据
  'POST /api/v3/graphData': (req: any, res: any) => {
    res.json({
      success: true,
      data: graphData,
      code: 200,
      message: '',
      errMsg: '',
    });
  },
};
