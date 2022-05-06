import { StyleProp, TextStyle } from 'react-native';

export type TextInputProps = {
  value?: string;
  autoFocus?: boolean;
  textInputStyles?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  icon?: JSX.IntrinsicAttributes;
  iconPosition?: 'left' | 'right';
  onChangeText: ((text: string) => void) | undefined;
  placeholder?: string;
};
