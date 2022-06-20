import React from 'react';
import { ImageBackground, Pressable, Text } from 'react-native';

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
    onPressLikeProduct: jest.fn()
  };

  const tree = renderer.create(<ProductCard {...props} />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Should render with ImageBackground', () => {
    const image = tree.root.findAllByType(ImageBackground)[0];
    expect(image.props.source.uri).toEqual(product.source);
  });


  test('should call function handlePressCardProduct', () => {
    const press = tree.root.findAllByType(Pressable)[0];
    press.props.onPress();
    expect(navigationMock.navigate).toHaveBeenCalled();
  });
  test('should call function handlePressLikeProduct', () => {
    const press = tree.root.findAllByType(Pressable)[1];
    press.props.onPress();
    expect(props.onPressLikeProduct).toHaveBeenCalled();
  });
});
