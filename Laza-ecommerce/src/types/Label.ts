import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type labelTextProps = {
  labelName: string;
  labelStyles?: StyleProp<TextStyle>;
  labelWrapperStyles?: StyleProp<ViewStyle>;
  labelType?: string;
  hasBorder?: boolean;
};
