import React, { memo, useCallback, useContext, useState } from 'react';
import {
  Alert,
  Image,
  Switch,
  TouchableOpacity,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';

// Screens
import { SCREENS_ROUTES } from 'constants/Screens';

// Components
import Button from 'components/Button';
import Title from 'components/Title';

// Screens
import DrawerItem from 'screens/SideMenu/components';

// Context
import { AppContext } from 'context/AppContext';
import { SIGN_OUT, SIGN_OUT_FAILED, SIGN_OUT_SUCCESS } from 'context/actions/auth';

// API
import { authService } from 'api';

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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { authState, authDispatch } = useContext(AppContext);

  const {
    currentUser: { username, avatar },
  } = authState;

  const orderCount = 3 | 0;

  // handel action sign out
  const onPressLogoutHandler = useCallback(() => {
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
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
              type: SIGN_OUT_SUCCESS,
            });
          } catch (error) {
            authDispatch({ type: SIGN_OUT_FAILED, payload: error });
            Alert.alert('Error', error.message);
          }
        },
      },
    ]);
  }, []);

  // handle Close menu
  const onCloseMenuHandler = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }, [navigation]);

  // handle action navigate to Bag screen
  const onNavigatedBagScreenHandler = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.BAGS.name);
  }, [navigation]);

  // handle action navigate to WishList screen
  const onNavigateWishlistScreenHandler = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.WISHLIST.name);
  }, [navigation]);

  // handle action navigate to Wallet screen
  const onNavigateWalletScreenHandler = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.WALLET.name);
  }, [navigation]);

  // Drawer List Item
  const renderDrawerItem = [
    {
      testID: 'AccountInformation',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.AccountInformation.name,
      source: IMAGES.iconInfo,
      onPress: () => {},
    },
    {
      testID: 'Side-menu-Bag',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.Order.name,
      source: IMAGES.iconBagDrawer,
      onPress: onNavigatedBagScreenHandler,
    },
    {
      testID: 'Side-menu-Wallet',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.Wallet.name,
      source: IMAGES.iconWalletDrawer,
      onPress: onNavigateWalletScreenHandler,
    },
    {
      testID: 'Side-menu-Wishlist',
      title: SCREENS_ROUTES.HOME_STACK.DRAWER_MENU.WishList.name,
      source: IMAGES.iconHeartDrawer,
      onPress: onNavigateWishlistScreenHandler,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconMenuWrapper}>
          <Button
            testID='Side-menu-toggle'
            icon={IMAGES.iconMenuOpen}
            iconStyles={[styles.iconMenu]}
            onPress={onCloseMenuHandler}
          />
        </View>
        <View style={[styles.infoWrapper]}>
          <View style={styles.profile}>
            {Boolean(avatar) && <Image style={styles.avatar} source={{ uri: avatar }} />}
            <View style={styles.profileInfoWrapper}>
              {Boolean(username) && <Title titleStyles={styles.accountName} titleName={username} />}
              <View style={styles.verifiedWrapper}>
                <Title titleName='Verified Profile' titleStyles={styles.verifiedText} />
                <Image style={styles.iconBadge} source={IMAGES.iconBadge} />
              </View>
            </View>
          </View>
          <View style={styles.orderInfo}>
            <Title titleName={`${orderCount} Orders`} titleStyles={styles.textOrder} />
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={[styles.darkModeWrapper]}>
          <DrawerItem title='Dark Mode' source={IMAGES.iconSun} />
          <View style={styles.switchWrapper}>
            <Switch
              style={styles.darkModeSwitch}
              trackColor={{ false: Colors.lightGray, true: Colors.lightGreen }}
              thumbColor={isEnabled ? Colors.white : Colors.lightGray}
              ios_backgroundColor={Colors.lightGray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        {/* End Dark mode  */}

        {/* Main Drawer Menu */}
        {renderDrawerItem.map(({ title, source, onPress }) => (
          <DrawerItem key={title} title={title} source={source} onPress={onPress} />
        ))}
        {/* End Main Drawer Menu */}
      </View>

      <View style={styles.footer}>
        <DrawerItem
          title='Logout'
          titleStyle={styles.logoutText}
          source={IMAGES.iconLogout}
          onPress={onPressLogoutHandler}
        />
      </View>
    </View>
  );
};

export default SideMenu;
