import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Product {
  id: string;
  brandId: string;
  price: number;
  title?: string;
  name: string;
  type: string;
  source: string;
  description?: string;
  reviewer?: IReviewerProps;
  like?: boolean;
  imageReview?: IImageReviewerProps[];
  rating?: string;
  comment: string;
}

export interface IReviewerProps {
  id: string;
  name: string;
  date: string;
  image: string;
}

export interface IImageReviewerProps {
  id: string;
  image: string;
}

export interface IProductCardProps {
  testID?: string;
  product: IProductsCardListProps;
  handleNavigationProductDetailScreen: (id: string) => void;
  handleLikeProduct: () => void;
  handleNavigationDetailScreen?: () => void;
  productCardStyles?: ViewStyle;
}

export interface IProductsCardListProps extends Product {
  productCardListStyles?: StyleProp<TextStyle>;
}

export interface IProductsListProps {
  productsData: IProductsCardListProps[];
  productCardStyles?: ViewStyle;
  handleLikeProduct: (item: Product) => void;
  handleNavigationProductDetailScreen: (id: string) => void;
  handleRefreshing?: () => void;
}
