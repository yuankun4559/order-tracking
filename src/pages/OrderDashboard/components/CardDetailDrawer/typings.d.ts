interface IDrawer {
  open: boolean;
  cardType?: string;
  cardTitleVal?: number;
  wrapClassName?: string;
  className?: string;
  title?: string;
  height?: number;
  transData?: AlertCardInfo;
  onOk?: () => void;
  onClose?: () => void;
}
