import { IProduct } from 'types/models/Products';

export interface IBrandDetailProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  route: {
    params: string;
  };
  productData: IProduct;
}