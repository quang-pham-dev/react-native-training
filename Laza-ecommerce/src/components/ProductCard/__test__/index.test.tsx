import React from 'react';
import { Image, ImageBackground, Pressable, Text } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductCard from 'components/ProductCard';
import Title from 'components/Title';

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

  test('Should render with ImageBackground', () => {
    const image = tree.root.findAllByType(ImageBackground)[0];
    expect(image.props.source.uri).toBe(product.source);
  });

  test('Should render with title', async () => {
    const title = tree.root.findAllByType(Title)[0];
    expect(title.props.titleName).toEqual(product.title);
    expect(title.props.titleName).toBeTruthy();
  });

  test('Should render with type', async () => {
    const type = tree.root.findAllByType(Title)[1];
    expect(type.props.titleName).toEqual(product.type);
    expect(type.props.titleName).toBeTruthy();
  });

  test('Should render with price', async () => {
    const price = tree.root.findAllByType(Text)[2];
    expect(price.props.children).toEqual(`$ ${product.price}`);
    expect(price.props.children).toBeTruthy();
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
