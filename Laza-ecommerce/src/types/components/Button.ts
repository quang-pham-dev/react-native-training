import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps {
  testID?: string;
  backgroundColor?: string;
  type?: string;
  disabled?: boolean;

  text?: string;

  icon?: ImageSourcePropType;

  onPress?: () => void;
  children?: JSX.Element | JSX.Element[];
}
