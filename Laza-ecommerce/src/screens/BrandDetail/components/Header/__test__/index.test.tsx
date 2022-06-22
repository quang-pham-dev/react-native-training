import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Button from 'components/Button';
import Header from 'screens/BrandDetail/components/Header';

// Mock data
import { brand } from '__mocks__/dataMock/brands';

describe('Brand detail Header', () => {
  let props = {
    logoUrl: brand.logoUrl,
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

  test('should call function handlePressBackIcon', () => {
    const backButton = tree.root.findAllByType(Button.type)[0];
    backButton.props.onPress();

    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
