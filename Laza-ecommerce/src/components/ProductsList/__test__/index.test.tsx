import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Components
import ProductsList from 'components/ProductsList';

// Mocks
import { products } from '__mocks__/dataMock/products';

// Constants
import { PRODUCTS_EMPTY_RESULT } from 'constants/Products';

// Utils
import { navigationMock } from 'utils/testMock';

describe('Product Card List Component', () => {
  const props = {
    products,
    onPressProductCard: navigationMock.navigate,
    onPressLikeProduct: jest.fn(),
    onLoadMoreProducts: jest.fn(),
  };

  const tree = renderer.create(<ProductsList {...props} />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Should render No products found text when products is empty', () => {
    const newProps = {
      ...props,
      products: [],
    };

    const tree = render(<ProductsList {...newProps} />);
    const { getByText } = tree;
    const label = getByText(PRODUCTS_EMPTY_RESULT);
    expect(label).toBeTruthy();
  });

  test('should call function onNavigateProductDetailScreen', () => {
    const press = tree.root.findAllByType(Pressable)[0];
    press.props.onPress();
    expect(navigationMock.navigate).toHaveBeenCalled();
  });
});
