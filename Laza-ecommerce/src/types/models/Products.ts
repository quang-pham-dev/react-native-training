import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IProduct {
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
  onNavigateProductDetailScreen: (id: string) => void;
  onPressLikeProduct: (item: IProduct) => void;
  productCardStyles?: ViewStyle;
}

export interface IProductsCardListProps extends IProduct {
  productCardListStyles?: StyleProp<TextStyle>;
}

export interface IProductsListProps {
  products: IProduct[];
  productCardStyles?: ViewStyle;
  onPressLikeProduct: (item: IProduct[]) => void;
  onNavigateProductDetailScreen: (id: string) => void;
}
