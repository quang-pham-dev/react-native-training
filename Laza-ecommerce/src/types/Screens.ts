import { UserSignIn } from 'types/User';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParams, HomeStackParams } from 'types/Navigation';
import { ProductProps } from './Products';

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParams>;

export interface GetStartedScreenProps {
  navigation: AuthNavigationProp;
}

export interface SignInScreenProps {
  navigation: AuthNavigationProp;
  onSubmit?: (data: UserSignIn) => void;
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
export interface ProductDetailProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  route: {
    params: string;
  };
  productData: ProductProps;
}

export interface BrandDetailProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  route: {
    params: string;
  };
  productData: ProductProps;
}
