import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';

import BrandCard from 'components/BrandCard';

const brandData = {
  id: '1',
  name: 'Nike',
  logoUrl: 'https://www.nike.com/a/content/dam/one_tap/one_tap_home/2019/07/nike-logo-white.png',
};

describe('Brand Card Component', () => {
  const navigate = jest.fn();

  const component = renderer.create(
    <BrandCard brand={brandData} handleNavigationBrandDetailScreen={navigate} />,
  );
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });

  test('should call function handleNavigationBrandDetailScreen', () => {
    const press = component.root.findAllByType(TouchableOpacity)[0];
    press.props.onPress();
    expect(navigate).toHaveBeenCalled();
  });
});
