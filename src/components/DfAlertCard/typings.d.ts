interface IntAlertCard {
  key?: React.Key;
  activeKey?: number;
  cardKey: number;
  cardTitle?: string;
  cardType?: string;
  cardTitleVal?: number;
  className?: string;
  desc?: string;
  onChange: () => void;
}

type AlertCardInfo = {
  key: React.Key;
  cardKey: number;
  name?: string;
  percent?: number;
};

interface IOrderPage {
  from?: string; // 入口来源 PAGE：页面级； DRAWER：抽屉
  transData?: AlertCardInfo;
}
