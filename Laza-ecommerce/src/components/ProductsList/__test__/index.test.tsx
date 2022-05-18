import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import ProductsList from 'components/ProductsList';
import { products } from '__mocks__/dataMock/products';

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

  test('Should render No Products! text when productsData is empty', () => {
    const component = render(
      <ProductsList
        handleNavigationProductDetailScreen={navigate}
        productsData={[]}
        handleLikeProduct={jest.fn()}
      />,
    );
    const { getByText } = component;
    const label = getByText('No Products!');
    expect(label).toBeTruthy();
  });

  test('Should navigate is called', async () => {
    const { getByTestId } = component;
    const button = getByTestId('productCardList');
    await waitFor(async () => {
      fireEvent.press(button);
    });
    expect(navigate).toBeCalledWith(products[0].id);
  });
});
