import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

export interface IProduct {
  id: string;
  brandId: string;
  price: number;
  title?: string;
  name: string;
  type: string;
  source: string;
  description?: string;
  reviewers: ReviewerProps;
  sizes: ProductSizeProps[];
  like?: boolean;
  imagesPreview?: IImageReviewerProps[];
  rating?: string;
  comment: string;
}

export interface ProductSizeProps {
  id: string;
  size: string;
}
export interface ReviewerProps {
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
  onPressProductCard: (id: string) => void;
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
  onPressProductCard: (id: string) => void;
  onLoadMoreProducts: () => void;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
export interface IProductResponse {
  data: {
    data: IProduct[];
    pagination: {
      _page?: number;
      _totalRows?: number;
      _limit: number;
    };
  };
}
