import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IButtonProps {
  testID?: string;
  onPressHandler?: () => void;
  buttonStyles?: ViewStyle[];
  text: string;
  textStyles?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  iconStyles?: ViewStyle[];
  type?: string;
  disabled?: boolean;
  color?: string;
  children?: JSX.Element | JSX.Element[];
}
