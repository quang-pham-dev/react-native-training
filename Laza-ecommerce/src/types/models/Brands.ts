import { StyleProp, TextStyle } from 'react-native';

export interface IBrand {
  id: string;
  name: string;
  logoUrl: string;
}

export interface IBrandCardProps {
  brand: IBrandCardListProps;
  onNavigateBrandDetailScreen: (id: string) => void;
  brandCardStyles?: StyleProp<TextStyle>;
}

export interface IBrandCardListProps extends IBrand {
  brandCardListStyles?: StyleProp<TextStyle>;
}

export interface IBrandsListProps {
  brandsData: IBrandCardListProps[];
  onNavigateBrandDetailScreen: (id: string) => void;
}
