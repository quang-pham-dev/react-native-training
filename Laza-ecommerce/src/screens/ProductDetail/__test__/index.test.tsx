import React from 'react';

// LIBS
import { cleanup, render } from '@testing-library/react-native';

// Screens
import ProductDetailScreen from 'screens/ProductDetail';

// Utils
import { navigationMock } from 'utils/testMock';

// Mock data
import { product } from '__mocks__/dataMock';

// API
import { productsService } from 'api/products.api';

// @ts-ignore
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(product) }));

jest.mock('api/products.api');

describe('Product detail Screen', () => {
  let tree: any;
  beforeEach(() => {
    tree = render(
      <ProductDetailScreen
        navigation={navigationMock}
        product={product}
        route={{
          params: product.id,
        }}
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

  test('should have a Add To Cart Button', () => {
    const { queryAllByTestId } = tree;
    const button = queryAllByTestId('addToCartButton');
    expect(button).toBeTruthy();
  });
});
