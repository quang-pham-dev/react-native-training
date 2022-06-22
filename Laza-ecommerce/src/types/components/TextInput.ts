import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ITextInputProps {
  testID?: string;
  value: string;
  label?: string;
  type?: 'text' | 'number' | 'password';
  labelStyle?: StyleProp<TextStyle>;
  autoFocus?: boolean;
  placeholder?: string;
  textInputStyles?: StyleProp<ViewStyle>;
  iconRight?: JSX.IntrinsicAttributes;
  onBlur?: () => void;
  onChangeText: (value: string) => void | undefined;
  onSubmitEditing?: () => void;
}
