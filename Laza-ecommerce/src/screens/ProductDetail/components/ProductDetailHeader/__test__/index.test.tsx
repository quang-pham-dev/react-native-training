import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import ProductDetailHeader from 'screens/ProductDetail/components/ProductDetailHeader';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail Header', () => {
  let props = {
    product,
    navigation: {
      navigate: jest.fn(),
      goBack: jest.fn(),
    },
  };

  const tree = renderer.create(<ProductDetailHeader {...props} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should call back button', () => {
    const backButton = tree.root.findAllByType(Pressable)[0];
    backButton.props.onPress();

    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
