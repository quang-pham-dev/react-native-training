import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import BrandCard from 'components/BrandCard';

const brandData = {
  id: '1',
  name: 'Nike',
  logoUrl: 'https://www.nike.com/a/content/dam/one_tap/one_tap_home/2019/07/nike-logo-white.png',
};

describe('Brand Card Component', () => {
  const navigate = jest.fn();

  const component = render(
    <BrandCard brand={brandData} handleNavigationBrandDetailScreen={navigate} />,
  );
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });

  test('Should navigate is called', () => {
    const { getByTestId } = component;

    const button = getByTestId('brandCard');
    fireEvent.press(button);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
