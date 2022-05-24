import React from 'react';
import { render } from '@testing-library/react-native';

import ProductsList from 'components/ProductsList';
import { products } from '__mocks__/dataMock/products';
import { PRODUCTS_EMPTY_RESULT } from 'constants/Products';

describe('Product Card List Component', () => {
  const navigate = jest.fn();

  const component = render(
    <ProductsList
      handleNavigationProductDetailScreen={navigate}
      productsData={products}
      handleLikeProduct={jest.fn()}
    />,
  );
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });

  test('Should render No products found text when productsData is empty', () => {
    const component = render(
      <ProductsList
        handleNavigationProductDetailScreen={navigate}
        productsData={[]}
        handleLikeProduct={jest.fn()}
      />,
    );
    const { getByText } = component;
    const label = getByText(PRODUCTS_EMPTY_RESULT);
    expect(label).toBeTruthy();
  });
});
