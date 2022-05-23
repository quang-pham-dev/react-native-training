import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard from 'components/ProductCard';
import { product } from '__mocks__/dataMock/products';
import { Pressable } from 'react-native';

describe('Product Card Component', () => {
  const navigate = jest.fn();

  const component = renderer.create(
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

  test('should call function handleNavigationProductDetailScreen', () => {
    const press = component.root.findAllByType(Pressable)[0];
    press.props.onPress();
    expect(navigate).toHaveBeenCalled();
  });
});
