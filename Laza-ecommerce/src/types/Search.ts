import { StyleProp, ViewStyle } from 'react-native';

export type SearchBarProps = {
  value?: string;
  autoFocus?: boolean;
  textInputStyles?: StyleProp<ViewStyle>;
  onSubmitEditing?: () => void;
  onChangeText: (text: string) => void;
};
