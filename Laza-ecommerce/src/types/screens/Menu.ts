import { ImageSourcePropType, StyleProp, TextStyle } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

export interface ISideMenuPros {
  navigation: DrawerNavigationHelpers;
}

export interface DrawerItemProps {
  testID?: string;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  source: ImageSourcePropType;
}
