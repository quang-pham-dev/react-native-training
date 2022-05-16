import { LoginBody } from 'types/Auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams, HomeStackParams } from 'types/Navigation';

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;

export interface GetStartedScreenProps {
  navigation: AuthNavigationProp;
}

export interface SignInScreenProps {
  navigation: AuthNavigationProp;
  onSubmit?: (data: LoginBody) => void;
}

export type AppNavigationProp = NativeStackNavigationProp<HomeStackParams>;

export interface HomeScreenProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    toggleDrawer: () => void;

  };
}
export interface HeaderProps {
  navigation: {
    toggleDrawer: () => void;
  };
}
