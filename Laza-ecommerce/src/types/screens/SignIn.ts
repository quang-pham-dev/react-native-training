import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from 'types/navigation/AuthStack';
import { ILoginCredentials } from 'types/models/User';

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;

export interface ISignInScreenProps {
  navigation: AuthNavigationProp;
  onSubmit?: (data: ILoginCredentials) => void;
}
