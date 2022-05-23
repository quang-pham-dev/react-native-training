import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import ProductDetailScreen from 'screens/ProductDetail';
import { navigationMock } from 'utils/testMock';
import { product } from '__mocks__/dataMock';

describe('Product detail Screen', () => {
  let tree: any;
  beforeEach(() => {
    jest.useFakeTimers();
    tree = render(
      <ProductDetailScreen
        navigation={navigationMock}
        productData={product}
        route={{ params: product.id }}
      />,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
