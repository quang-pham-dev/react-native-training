import React from 'react';
import { render } from '@testing-library/react-native';
import BrandsCardList from 'components/BrandList';
import { brandsData } from '__mocks__/dataMock';

describe('Brand Card List Component', () => {
  const navigate = jest.fn();

  const component = render(
    <BrandsCardList handleNavigationBrandDetailScreen={navigate} brandsData={brandsData} />,
  );
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });
});
