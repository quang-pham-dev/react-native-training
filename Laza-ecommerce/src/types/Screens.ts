import { LoginBody } from 'types/Auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from 'types/Navigation';

export type NavigationProp = NativeStackNavigationProp<AuthStackParams>;

export interface GetStartedScreenProps {
  navigation: NavigationProp;
}

export interface SignInScreenProps {
  navigation: NavigationProp;
  onSubmit?: (data: LoginBody) => void;
}
