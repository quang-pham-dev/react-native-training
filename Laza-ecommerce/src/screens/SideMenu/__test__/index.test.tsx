import React from 'react';
import { Pressable } from 'react-native';

// LIBS
import { DrawerActions } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screen
import SideMenu from 'screens/SideMenu';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

// Utils
import { navigationMock } from 'utils/testMock';

describe('Side menu', () => {
  let tree: any;
  const closeMenuID = 'Side-menu-close';

  const props = {
    navigation: navigationMock,
  };
  tree = renderer.create(<SideMenu {...props} />);

  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should call function onCloseMenuHandler', async () => {
    const closeMenu = tree.root.findByProps({ testID: closeMenuID });
    await fireEvent.press(closeMenu);

    expect(props.navigation.dispatch).toHaveBeenCalledWith(DrawerActions.closeDrawer());
  });

  test('should navigated to handleNavigateToBagScreen', () => {
    const button = tree.root.findAllByType(Pressable)[2];
    button.props.onPress();

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.BAGS.name);
  });

  test('should navigated to handleNavigateToWalletScreen', () => {
    const button = tree.root.findAllByType(Pressable)[3];
    button.props.onPress();

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.WALLET.name);
  });

  test('should navigated to handleNavigateToWishlistScreen', () => {
    const button = tree.root.findAllByType(Pressable)[4];
    button.props.onPress();

    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.STACK.WISHLIST.name);
  });
});
