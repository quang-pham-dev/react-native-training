import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { BrandProps } from './Brands';

export interface ProductsModel {
  id: string;
  brandId: BrandProps['id'];
  productName: string;
  productPrice: number;
  productImage: string;
  productDescription: string;
  productReviews: ProductsReviewsProps;
  likes: boolean;
}

export interface ProductsReviewsProps {
  id: string;
  reviewer: ReviewerProps;
  rating: string;
  content: string;
}

export interface ReviewerProps {
  id: string;
  name: string;
  date: string;
  avatar: string;
}
export type ProductProps = {
  id: string;
  brandId: string;
  price: number;
  title?: string;
  name: string;
  type: string;
  source: string;
  description?: string;
  reviews?: ProductsReviewsProps[];
  like?: boolean;
};

export interface ProductCardProps {
  product: ProductProps;
  handleNavigationProductDetailScreen: (id: string) => void;
  handleLikeProduct: () => void;
  handleNavigationDetailScreen?: () => void;
  productCardStyles?: ViewStyle;
}

export interface ProductsListProps {
  productsData: ProductProps[];
  handleLikeProduct: (item: ProductProps) => void;
  handleNavigationProductDetailScreen: (id: string) => void;
  handleRefreshing?: () => void;
}

export interface ProductsCardListProps extends ProductProps {
  brandCardListStyles?: StyleProp<TextStyle>;
}
