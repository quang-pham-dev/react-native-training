import React, { useCallback, useState } from 'react';
import { Alert, Image, Switch, View } from 'react-native';

// LIBS
import { DrawerActions } from '@react-navigation/native';

// Screens
import { SCREENS_ROUTES } from 'constants/Screens';

// Components
import Button from 'components/Button';
import Title from 'components/Title';

// Screens
import DrawerItem from 'screens/SideMenu/components';

// Context
import { useAuthContext } from 'contexts/AuthContext';
import { SIGN_OUT, SIGN_OUT_FAILED, SIGN_OUT_SUCCESS } from 'contexts/actions/auth';

// API
import { authService } from 'api/auth';

// Constants
import { AUTH_DATA } from 'constants/Common';

// Types
import { ISideMenuPros } from 'types/screens/Menu';

// Themes
import IMAGES from 'themes/Images';
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

// Utils
import { remove } from 'utils/localStorage';

const SideMenu = ({ navigation }: ISideMenuPros) => {
  const { authState, authDispatch } = useAuthContext();

  const { currentUser } = authState || {};

  const { username, avatar } = currentUser || {};

  const orderCount = 3;

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (): void => setIsEnabled(previousState => !previousState);

  // handel action sign out
  const handlePressLogoutIcon = useCallback(() => {
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {}
      },
      {
        text: 'OK',
        onPress: async () => {
          navigation.toggleDrawer();

          authDispatch({ type: SIGN_OUT });
          try {
            await authService.signOut();
            await remove(AUTH_DATA);
            authDispatch({
              type: SIGN_OUT_SUCCESS
            });
          } catch (error) {
            authDispatch({ type: SIGN_OUT_FAILED, payload: error });
            Alert.alert('Error', error.message);
          }
        }
      }
    ]);
  }, []);

  // handle Close menu
  const handleCloseMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }, []);

  // handle action navigate to Bag screen
  const handlePressBagIcon = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.BAGS.name);
  }, []);

  // handle action navigate to WishList screen
  const handlePressWishlistIcon = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.WISHLIST.name);
  }, []);

  // handle action navigate to Wallet screen
  const handlePressWalletIcon = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.WALLET.name);
  }, []);

  // Drawer List Item
  const renderDrawerItem = [
    {
      testID: 'AccountInformation',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.AccountInformation.name,
      source: IMAGES.iconInfo
    },
    {
      testID: 'Side-menu-Bag',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.Order.name,
      source: IMAGES.iconBagDrawer,
      onPress: handlePressBagIcon
    },
    {
      testID: 'Side-menu-Wallet',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.Wallet.name,
      source: IMAGES.iconWalletDrawer,
      onPress: handlePressWalletIcon
    },
    {
      testID: 'Side-menu-Wishlist',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.WishList.name,
      source: IMAGES.iconHeartDrawer,
      onPress: handlePressWishlistIcon
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconMenuWrapper}>
          <Button
            testID='Side-menu-close'
            icon={IMAGES.iconMenuOpen}
            onPress={handleCloseMenu}
            type='Circle'
          />
        </View>

        <View style={[styles.infoWrapper]}>
          <View style={styles.profile}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
            <View style={styles.profileInfoWrapper}>
              <Title titleName={username} />
              <View style={styles.verifiedWrapper}>
                <Title titleName='Verified Profile' style={styles.verifiedText} />
                <Image style={styles.iconBadge} source={IMAGES.iconBadge} />
              </View>
            </View>
          </View>
          <View style={styles.orderInfo}>
            <Title titleName={`${orderCount} Orders`} style={styles.textOrder} />
          </View>
        </View>
      </View>
      {/* end header */}

      <View style={styles.main}>
        <View style={[styles.darkModeWrapper]}>
          <DrawerItem title='Dark Mode' source={IMAGES.iconSun} />
          <Switch
            style={styles.darkModeSwitch}
            trackColor={{ false: Colors.lightGray, true: Colors.lightGreen }}
            thumbColor={isEnabled ? Colors.white : Colors.lightGray}
            ios_backgroundColor={Colors.lightGray}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        {/* End Dark mode  */}

        {/* Main Drawer Menu */}
        {renderDrawerItem.map(({ title, source, onPress }) => (
          <DrawerItem key={title} title={title} source={source} onPress={onPress} />
        ))}
        {/* End Main Drawer Menu */}
      </View>
      {/* end main */}

      <View style={styles.footer}>
        <DrawerItem
          title='Logout'
          titleStyle={styles.logoutText}
          source={IMAGES.iconLogout}
          onPress={handlePressLogoutIcon}
        />
      </View>
    </View>
  );
};

export default SideMenu;
