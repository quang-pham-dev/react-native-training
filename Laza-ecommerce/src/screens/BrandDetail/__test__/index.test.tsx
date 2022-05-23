import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import BrandDetailScreen from 'screens/BrandDetail';
import { navigationMock } from 'utils/testMock';
import { product } from '__mocks__/dataMock';
import { brand } from '__mocks__/dataMock';

describe('Brand detail Screen', () => {
  let tree: any;

  beforeEach(() => {
    jest.useFakeTimers();

    tree = render(
      <BrandDetailScreen
        navigation={navigationMock}
        route={{
          params: brand.id,
        }}
        productData={product}
      />,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Available in stock Text', () => {
    const { getByText } = tree;
    const text = getByText('Available in stock');
    expect(text).toBeTruthy();
  });
});
