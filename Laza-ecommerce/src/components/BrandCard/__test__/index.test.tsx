import React from 'react';
import { TouchableOpacity } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import BrandCard from 'components/BrandCard';

// Mocks
import { brand } from '__mocks__/dataMock/brands';

// Utils
import { navigationMock } from 'utils/testMock';

describe('Brand Card Component', () => {
  const tree = renderer.create(
    <BrandCard brand={brand} onNavigateBrandDetailScreen={navigationMock.navigate} />,
  );
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function handleNavigationBrandDetailScreen', () => {
    const Pressable = tree.root.findAllByType(TouchableOpacity)[0];
    Pressable.props.onPress();
    expect(navigationMock.navigate).toHaveBeenCalled();
  });
});
