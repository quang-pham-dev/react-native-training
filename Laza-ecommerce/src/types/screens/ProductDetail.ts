import { Product } from 'types/models/Products';

export interface IProductDetailProps {
  navigation: {
    navigate: (value: string, params: string) => void;
    goBack: () => void;
  };
  route: {
    params: string;
  };
  productData: Product;
}
