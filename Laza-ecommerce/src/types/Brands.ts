import { StyleProp, TextStyle } from 'react-native';

export type BrandProps = {
  id: string;
  name: string;
  logoUrl: string;
};

export type BrandCardProps = {
  brand: BrandCardListProps;
  handleNavigationBrandDetailScreen: (id: string) => void;
  brandCardStyles?: StyleProp<TextStyle>;
};

export interface BrandCardListProps extends BrandProps {
  brandCardListStyles?: StyleProp<TextStyle>;
}

export interface BrandsListProps {
  brandsData: BrandCardListProps[];
  handleNavigationBrandDetailScreen: (id: string) => void;
}
