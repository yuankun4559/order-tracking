type TypeKeyValue = {
  [key: string]: any;
};

interface IDrawer {
  open: boolean;
  cardType?: string;
  cardTitleVal?: number;
  wrapClassName?: string;
  className?: string;
  title?: string;
  height?: number;
  transData?: OD.IOrderPrescriptionItem;
  orderType?: string;
  activeKeys?: number[];
  onOk?: () => void;
  onClose?: () => void;
}

interface IGraphBox {
  earlyWarningCode: number;
  orderType: string;
  activeKeys?: number[];
}

interface IAlertCardLevelMap {
  [key: number]: IAlertCardLevelMapItem;
}

interface IAlertCardLevelMapItem {
  key: number;
  level?: string;
}

interface IAlertCardMap {
  [key: number]: IAlertCardMapItem;
}
interface IAlertCardMapItem {
  key: number;
  name: string;
  charts?: any[];
}

interface IGraphItem {
  key: string;
  type: string;
  title: string;
  dimension: string;
  unit?: string;
  url?: string;
}

declare namespace OD {
  interface IOrderDistribution {
    additionalProperties1?: IOrderDistributionItem[];
    additionalProperties2?: IOrderDistributionItem[];
    additionalProperties3?: IOrderDistributionItem[];
  }
  interface IOrderDistributionItem {
    fulfilledOrderVolume: number;
    subHangUpStatus: number;
    subHangUpStatusDesc: string;
    nodeDescription?: string;
    responsibleDepartment?: string;
    systemsInvolved?: string;
  }

  interface IOrderPrescription {
    [key: number]: IOrderPrescriptionItem[];
  }

  interface IOrderPrescriptionItem {
    customerNumber: number;
    fulfilledOrderVolume: number;
    gmv: number;
    earlyWarningCode?: number;
    earlyWarningName?: string;
    earlyWarningLevel?: number;
    earlyWarningTooltips?: string;
    earlyWarningType?: string;
    percent?: number;
    // [key: string]: any;
  }
}
