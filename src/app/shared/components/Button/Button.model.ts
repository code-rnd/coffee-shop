export enum ButtonMode {
  DEFAULT = "DEFAULT",
  MINI = "MINI",
}

export interface ButtonModel {
  title: string;
  handleAdd: any;
  handleRemove: any;
  disabled?: boolean;
  count?: number;
  mode?: ButtonMode;
}
