import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { SCREENS_ROUTES } from 'constants/Screens';
import SideMenu from 'screens/SideMenu';
import { navigationMock } from 'utils/testMock';

describe('Side menu', () => {
  let tree: any;

  beforeEach(() => {
    tree = render(<SideMenu navigation={navigationMock} />);
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  test('should navigated to handleNavigateToBagScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Bag');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.BAGS.name);
  });

  test('should navigated to handleNavigateToWalletScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Wallet');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.WALLET.name);
  });

  test('should navigated to handleNavigateToWishlistScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Wishlist');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.WALLET.name);
  });
});
