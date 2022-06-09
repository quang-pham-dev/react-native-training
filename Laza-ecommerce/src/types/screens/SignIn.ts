import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams } from 'types/navigation/AuthStack';

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;

export interface ISignInScreenProps {
  navigation: AuthNavigationProp;
}
