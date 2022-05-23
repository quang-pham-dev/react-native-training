import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from 'types/navigation/AuthStack';
import { IUserSignIn } from 'types/models/User';

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;

export interface ISignInScreenProps {
  navigation: AuthNavigationProp;
  onSubmit?: (data: IUserSignIn) => void;
}
