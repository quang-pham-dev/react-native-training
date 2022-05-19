import { fireEvent, render } from '@testing-library/react-native';
import Screens from 'constants/Screens';
import React from 'react';
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

    expect(navigationMock.navigate).toHaveBeenCalledWith(Screens.Bag.name);
  });

  test('should navigated to handleNavigateToWalletScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Wallet');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(Screens.Wallet.name);
  });

  test('should navigated to handleNavigateToWishlistScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Wishlist');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(Screens.WishList.name);
  });

  test('should called function handleToggleMenu', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-toggle');

    fireEvent(Press, 'press');

    expect(navigationMock.dispatch).toHaveBeenCalled();
  });

  test('should called function LogOut', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-toggle');

    fireEvent(Press, 'press');

    expect(navigationMock.dispatch).toHaveBeenCalled();
  });
});
