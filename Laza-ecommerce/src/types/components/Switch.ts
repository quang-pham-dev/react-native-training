export interface ISwitchProps {
  type?: 'android' | 'ios';

  value?: boolean;

  disable?: boolean;

  onToggle?: (newValue: boolean) => void;
}
