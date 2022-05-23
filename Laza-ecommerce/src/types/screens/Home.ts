import { DrawerActionType } from '@react-navigation/native';

export interface IHomeScreenProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    toggleDrawer: () => void;
    dispatch: (value: DrawerActionType) => void;
  };
}
