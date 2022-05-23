import { StyleProp, TextStyle } from 'react-native';

export interface IMoreLessTextProps {
  children?: React.ReactNode;
  numberOfLines: number;
  styleShowMoreText?: StyleProp<TextStyle>;
}
