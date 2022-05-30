import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductDetailReviews from 'screens/ProductDetail/components/ProductDetailReviews';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail reviewer review', () => {
  const tree = renderer.create(<ProductDetailReviews product={product} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
