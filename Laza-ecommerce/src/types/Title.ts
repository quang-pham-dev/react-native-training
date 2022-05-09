import { StyleProp, TextStyle } from 'react-native';

export type titleProps = {
  children?: React.ReactNode;
  titleStyles?: StyleProp<TextStyle>;
  fontSize: number;
  fontFamily: string;
  color: string;
  lineHeight?: number;
  titleName?: string;
  type?: string;
};
