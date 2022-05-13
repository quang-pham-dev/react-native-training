export type SearchBarProps = {
  value?: string;
  autoFocus?: boolean;
  textInputStyles?: any;
  onSubmitEditing?: () => void;
  onChangeText: (text: string) => void;
};
