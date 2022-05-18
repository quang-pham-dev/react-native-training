import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ProductCard from 'components/ProductCard';
import { product } from '__mocks__/dataMock/products';

describe('Product Card Component', () => {
  const navigate = jest.fn();

  const component = render(
    <ProductCard
      product={product}
      handleNavigationProductDetailScreen={navigate}
      handleLikeProduct={jest.fn()}
    />,
  );
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });

  test('Should navigate is called', () => {
    const { getByTestId } = component;

    const card = getByTestId('productCard');
    fireEvent.press(card);
    expect(navigate).toBeCalledWith(product.id);
  });
});
