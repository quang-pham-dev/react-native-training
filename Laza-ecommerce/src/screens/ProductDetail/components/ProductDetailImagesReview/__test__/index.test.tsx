import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductImagesReview from 'screens/ProductDetail/components/ProductDetailImagesReview';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail Images review', () => {
  const tree = renderer.create(<ProductImagesReview product={product} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
