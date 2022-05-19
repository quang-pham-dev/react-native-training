import React from 'react';
import BrandsCardList from 'components/BrandList';
import { brandsData } from '__mocks__/dataMock';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';

describe('Brand Card List Component', () => {
  const navigate = jest.fn();

  const component = renderer.create(
    <BrandsCardList handleNavigationBrandDetailScreen={navigate} brandsData={brandsData} />,
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
