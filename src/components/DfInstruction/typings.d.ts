interface IModal {
  open: boolean;
  cardType?: string;
  cardTitleVal?: number;
  wrapClassName?: string;
  className?: string;
  onOk?: () => void;
  onCancel?: () => void;
}
