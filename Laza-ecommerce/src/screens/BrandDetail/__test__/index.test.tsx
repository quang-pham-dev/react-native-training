import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screens
import BrandDetailScreen from 'screens/BrandDetail';

// Utils
import { navigationMock } from 'utils/testMock';

// Mock data
import { brands, brand, product } from '__mocks__/dataMock';

// API
import { productsService } from 'api/products.api';

// Constants
import { PAGINATION } from 'constants/Products';

jest.mock('api/http');

describe('Brand detail Screen', () => {
  let tree: any;

  beforeEach(() => {
    tree = renderer.create(
      <BrandDetailScreen
        navigation={navigationMock}
        route={{
          params: brand.id,
        }}
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();

    cleanup();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Available in stock Text', () => {
    const tree = render(
      <BrandDetailScreen
        navigation={navigationMock}
        route={{
          params: brand.id,
        }}
      />,
    );
    const { getByText } = tree;
    const text = getByText('Available in stock');
    expect(text).toBeTruthy();
  });

  test('should call handlePressBackIcon', () => {
    const Pressabled = tree.root.findAllByType(Pressable)[0];
    Pressabled.props.onPress();
    expect(navigationMock.goBack).toHaveBeenCalled();
  });

  test('should call function getProductsByBrandId successfully', async () => {
    jest.fn().mockRejectedValueOnce({ data: [brands] });
    render(
      <BrandDetailScreen
        navigation={navigationMock}
        route={{
          params: brand.id,
        }}
      />,
    );

    await productsService.getProductsByBrandId(product.brandId, PAGINATION.LIMIT);
  });

  test('should call function handlePressProductCard', () => {
    const press = tree.root.findAllByType(Pressable)[0];
    press.props.onPress();
  });
});
