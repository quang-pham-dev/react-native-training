import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductDetailDescription from 'screens/ProductDetail/components/ProductDetailDescription';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail Description', () => {
  const tree = renderer.create(<ProductDetailDescription product={product} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
