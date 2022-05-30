import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductSize from 'screens/ProductDetail/components/ProductSize';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail size', () => {
  const tree = renderer.create(<ProductSize product={product} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
