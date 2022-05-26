import { IProduct } from 'types/models/Products';

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
  onPressBack: () => void;
  onPressCart: () => void;
  product: IProduct;
}
export interface IProductDetailItemProps {
  product: IProduct;
}
