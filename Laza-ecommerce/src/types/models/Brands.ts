import { StyleProp, TextStyle } from 'react-native';

export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
}

export interface IBrandCardProps {
  brand: IBrandCardListProps;
  handleNavigationBrandDetailScreen: (id: string) => void;
  brandCardStyles?: StyleProp<TextStyle>;
}

export interface IBrandCardListProps extends Brand {
  brandCardListStyles?: StyleProp<TextStyle>;
}

export interface IBrandsListProps {
  brandsData: IBrandCardListProps[];
  handleNavigationBrandDetailScreen: (id: string) => void;
}
