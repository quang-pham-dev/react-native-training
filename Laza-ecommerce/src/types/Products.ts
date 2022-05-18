import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface ReviewerProps {
  id: string;
  name: string;
  date: string;
  image: string;
}

export interface ImageReviewerProps {
  id: string;
  image: string;
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
  reviewer?: ReviewerProps;
  like?: boolean;
  imageReview?: ImageReviewerProps[];
  rating?: string;
  comment: string;
};

export interface ProductCardProps {
  product: ProductsCardListProps;
  handleNavigationProductDetailScreen: (id: string) => void;
  handleLikeProduct: () => void;
  handleNavigationDetailScreen?: () => void;
  productCardStyles?: ViewStyle;
}

export interface ProductsCardListProps extends ProductProps {
  productCardListStyles?: StyleProp<TextStyle>;
}

export interface ProductsListProps {
  productsData: ProductsCardListProps[];
  productCardStyles?: ViewStyle;
  handleLikeProduct: (item: ProductProps) => void;
  handleNavigationProductDetailScreen: (id: string) => void;
  handleRefreshing?: () => void;
}
