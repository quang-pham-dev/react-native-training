import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductDetailInformation from 'screens/ProductDetail/components/ProductInformation';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail information', () => {
  const tree = renderer.create(<ProductDetailInformation product={product} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
