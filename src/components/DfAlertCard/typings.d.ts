interface IntAlertCard extends OD.IOrderPrescriptionItem {
  activeKey?: number;
  cardKey?: number;
  cardTitle?: string;
  cardType?: string;
  cardTitleVal?: number;
  className?: string;
  desc?: string;
  onChange?: () => void;
}

type AlertCardInfo = {
  key?: number;
  cardKey: number;
  name?: string;
  percent?: number;
};

type IComConditionItem = {
  orderType: string;
  subHangUpStatus: string;
};

type IOrderParamProps = {
  orderType: string;
  combinationConditionList?: IComConditionItem[];
};

interface IOrderPage {
  from?: string; // 入口来源 PAGE：页面级； DRAWER：抽屉
  transParams?: IOrderParamProps;
}
