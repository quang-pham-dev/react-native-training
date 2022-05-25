import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { SCREENS_ROUTES } from 'constants/Screens';
import SideMenu from 'screens/SideMenu';
import { navigationMock } from 'utils/testMock';
import { DrawerActions } from '@react-navigation/native';

describe('Side menu', () => {
  let tree: any;
  const action = 'press';

  const bagTestID = 'Side-menu-Bag';
  const walletTestID = 'Side-menu-Wallet';
  const wishlistTestID = 'Side-menu-Wishlist';
  const toggleDrawerTestID = 'Side-menu-toggle';

  beforeEach(() => {
    tree = render(<SideMenu navigation={navigationMock} />);
  });

  //   afterEach(() => {
  //     jest.clearAllMocks();
  //   });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should navigated to handleNavigateToBagScreen', () => {
    const { getByTestId } = tree;
    const bagIconPress = getByTestId(bagTestID);

    fireEvent(bagIconPress, action);

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.BAGS.name);
  });

  test('should navigated to handleNavigateToWalletScreen', () => {
    const { getByTestId } = tree;
    const walletIconPress = getByTestId(walletTestID);

    fireEvent(walletIconPress, action);

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.WALLET.name);
  });

  test('should navigated to handleNavigateToWishlistScreen', () => {
    const { getByTestId } = tree;
    const wishlistIconPress = getByTestId(wishlistTestID);

    fireEvent(wishlistIconPress, action);

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.WALLET.name);
  });
});
