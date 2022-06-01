import { StyleProp, ViewStyle } from 'react-native';

export interface ISearchBarProps {
  value?: string;
  autoFocus?: boolean;
  textInputStyles?: StyleProp<ViewStyle>;
  onSubmitEditing: () => void;
  onChangeText?: (text: string) => void;
}
