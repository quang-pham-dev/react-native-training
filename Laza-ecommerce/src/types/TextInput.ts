import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TextInputProps = {
  testID?: string;
  value: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  autoFocus?: boolean;
  placeholder?: string;
  textInputStyles?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  icon?: JSX.IntrinsicAttributes;
  iconPosition?: 'left' | 'right';
  onBlur?: () => void;
  onChangeText: (value: string) => void | undefined;
};
