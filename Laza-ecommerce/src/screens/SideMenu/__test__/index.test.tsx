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
  test('should navigate to handleNavigateToBagScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Bag');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(Screens.Bag.name);
  });

  test('should call function handleNavigateToWalletScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Wallet');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(Screens.Wallet.name);
  });

  test('should call function handleNavigateToWishlistScreen', () => {
    const { getByTestId } = tree;
    const Press = getByTestId('Side-menu-Wishlist');
    fireEvent(Press, 'press');

    expect(navigationMock.navigate).toHaveBeenCalledWith(Screens.WishList.name);
  });
});
