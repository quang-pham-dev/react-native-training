import React from 'react';
import BrandsCardList from 'components/BrandList';
import { brands } from '__mocks__/dataMock';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import { render } from '@testing-library/react-native';
import { BRANDS_EMPTY_RESULT } from 'constants/Brands';

describe('Brand Card List Component', () => {
  const navigate = jest.fn();

  const component = renderer.create(
    <BrandsCardList onNavigateBrandDetailScreen={navigate} brandsData={brands} />,
  );
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });

  test('should call function onNavigateBrandDetailScreen', () => {
    const press = component.root.findAllByType(TouchableOpacity)[0];
    press.props.onPress();
    expect(navigate).toHaveBeenCalled();
  });

  test('Should render No Brand found text when brandsData is empty', () => {
    const component = render(
      <BrandsCardList onNavigateBrandDetailScreen={navigate} brandsData={[]} />,
    );
    const { getByText } = component;
    const label = getByText(BRANDS_EMPTY_RESULT);
    expect(label).toBeTruthy();
  });
});
