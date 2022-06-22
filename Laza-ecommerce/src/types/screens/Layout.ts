import { DrawerActionType } from '@react-navigation/native';

export interface IHeaderProps {
  navigation: {
    dispatch: (value: DrawerActionType) => void;
  };
}
