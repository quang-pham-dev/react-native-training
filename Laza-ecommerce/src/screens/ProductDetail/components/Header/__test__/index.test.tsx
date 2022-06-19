import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Button from 'components/Button';
import Header from 'screens/ProductDetail/components/Header';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail Header', () => {
  let props = {
    source: product.source,
    navigation: {
      navigate: jest.fn(),
      goBack: jest.fn()
    }
  };

  const tree = renderer.create(<Header {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function handlePressBack', () => {
    const backButton = tree.root.findAllByType(Button)[0];
    backButton.props.onPress();

    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
