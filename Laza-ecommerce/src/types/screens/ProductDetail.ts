// Types
import {
  IImageReviewerProps,
  IProduct,
  ProductSizeProps,
  ReviewerProps,
} from 'types/models/Products';

export interface IProductDetailProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  route: {
    params: string;
  };
  product: IProduct;
}
export interface IProductDetailHeaderProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  source: string;
}
export interface IProductDetailItemProps {
  price?: number;
  title?: string;
  name?: string;
  type?: string;
  source?: string;
  description?: string;
  reviewers?: ReviewerProps;
  sizes?: ProductSizeProps[];
  like?: boolean;
  imagesPreview?: IImageReviewerProps[];
  rating?: string;
  comment?: string;
}
