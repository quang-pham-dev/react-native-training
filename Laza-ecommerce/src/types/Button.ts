import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
  testID?: string;
  onPress?: () => void;
  buttonStyles?: ViewStyle[];
  text?: string;
  textStyles?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
  iconStyles?: ViewStyle[];
  type?: string;
  disabled?: boolean;
  color?: string;
  children?: JSX.Element | JSX.Element[];
};
