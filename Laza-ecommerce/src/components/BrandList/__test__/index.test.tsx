import React from 'react';
import { TouchableOpacity } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

// Components
import BrandsCardList from 'components/BrandList';

// Mocks
import { brands } from '__mocks__/dataMock';

// Constants
import { BRANDS_EMPTY_RESULT } from 'constants/Brands';

// Utils
import { navigationMock } from 'utils/testMock';

describe('Brand Card List Component', () => {
  const props = {
    onPressBrandCard: navigationMock.navigate,
    brands
  };

  const tree = renderer.create(<BrandsCardList {...props} />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function onPressBrandCard', () => {
    const Pressable = tree.root.findAllByType(TouchableOpacity)[0];
    Pressable.props.onPress();
    expect(navigationMock.navigate).toHaveBeenCalled();
  });

  test('Should render No Brand found text when brands is empty', () => {
    const newProps = {
      ...props,
      brands: []
    };
    const component = render(<BrandsCardList {...newProps} />);
    const { getByText } = component;
    const textContent = getByText(BRANDS_EMPTY_RESULT);
    expect(textContent).toBeTruthy();
  });
});
