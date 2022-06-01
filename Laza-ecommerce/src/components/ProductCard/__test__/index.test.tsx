import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductCard from 'components/ProductCard';

// Mocks
import { product } from '__mocks__/dataMock/products';

// Utils
import { navigationMock } from 'utils/testMock';

describe('Product Card Component', () => {
  const props = {
    product,
    onPressProductCard: navigationMock.navigate,
    onPressLikeProduct: jest.fn(),
  };

  const tree = renderer.create(<ProductCard {...props} />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function onNavigateProductDetailScreen', () => {
    const press = tree.root.findAllByType(Pressable)[0];
    press.props.onPress();
    expect(navigationMock.navigate).toHaveBeenCalled();
  });
});
