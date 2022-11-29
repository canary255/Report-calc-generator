export type TargetProps = {
  value?: string;
  onClick: (e: any) => void;
};

export enum Target {
  SINGLE = "single",
  DOUBLE = "double",
}
