import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type labelTextProps = {
  children?: React.ReactNode;
  fontSize?: number;
  labelName?: string;
  fontFamily?: string;
  color?: string;
  lineHeight: number;
  labelStyles?: StyleProp<TextStyle>;
  labelWrapperStyles?: StyleProp<ViewStyle>;
  labelType?: string;
  hasBorder?: boolean;
};
