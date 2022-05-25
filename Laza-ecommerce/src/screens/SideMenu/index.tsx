import React, { memo, useCallback, useContext, useState } from 'react';
import { Alert, Image, Switch, TouchableOpacity, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

// Screens
import { SCREENS_ROUTES } from 'constants/Screens';

// Components
import Button from 'components/Button';
import Title from 'components/Title';

// Context
import { AppContext } from 'context/AppContext';
import { SIGN_OUT, SIGN_OUT_FAILED, SIGN_OUT_SUCCESS } from 'context/actions/auth.actions';

// API
import { authService } from 'api';

// Constants
import { AUTH_DATA } from 'constants/Common';

// Types
import { ISideMenuPros } from 'types/screens/Layout';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

// Utils
import { remove } from 'utils/localStorage';

const SideMenu = ({ navigation }: ISideMenuPros) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { authState, authDispatch } = useContext(AppContext);

  const orderCount = 3 | 0;

  // handel action sign out
  const handlePressLogout = useCallback(() => {
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
  const handleCloseMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }, [navigation]);

  // handle action navigate to Bag screen
  const handleNavigateToBagScreen = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.BAGS.name);
  }, [navigation]);

  // handle action navigate to WishList screen
  const handleNavigateToWishlistScreen = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.WISHLIST.name);
  }, [navigation]);

  // handle action navigate to Wallet screen
  const handleNavigateToWalletScreen = useCallback(() => {
    navigation.navigate(SCREENS_ROUTES.STACK.WALLET.name);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconMenuWrapper}>
          <Button
            testID='Side-menu-toggle'
            icon={IMAGES.iconMenuOpen}
            iconStyles={[styles.iconMenu]}
            onPress={handleCloseMenu}
          />
        </View>
        <View style={[styles.infoWrapper]}>
          <View style={styles.profile}>
            {authState?.currentUser?.avatar ? (
              <Image style={styles.avatar} source={{ uri: authState?.currentUser?.avatar }} />
            ) : (
              <Image style={styles.avatar} source={IMAGES.iconAvatar} />
            )}
            <View style={styles.profileInfoWrapper}>
              {authState?.currentUser?.username ? (
                <Title
                  titleStyles={styles.accountName}
                  titleName={authState?.currentUser?.username}
                />
              ) : null}
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
          <View style={[styles.darkMode]}>
            <Image style={styles.icons} source={IMAGES.iconSun} />
            <Title titleName='Dark Mode' titleStyles={styles.text} />
          </View>
          <View style={styles.switchWrapper}>
            <Switch
              style={styles.darkModeSwitch}
              trackColor={{ false: '#767577', true: '#34C759' }}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[styles.boxWrapper]}
          onPress={() => {}}
          testID='AccountInformation'>
          <Image style={styles.icons} source={IMAGES.iconInfo} />
          <Title titleName='Account Information' titleStyles={styles.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boxWrapper]}
          onPress={handleNavigateToBagScreen}
          testID='Side-menu-Bag'>
          <Image style={styles.icons} source={IMAGES.iconBagDrawer} />
          <Title titleName='Order' titleStyles={styles.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boxWrapper]}
          onPress={handleNavigateToWalletScreen}
          testID='Side-menu-Wallet'>
          <Image style={styles.icons} source={IMAGES.iconWalletDrawer} testID='Side-menu-Cards' />
          <Title titleName='My Cards' titleStyles={styles.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.boxWrapper]}
          onPress={handleNavigateToWishlistScreen}
          testID='Side-menu-Wishlist'>
          <Image style={styles.icons} source={IMAGES.iconHeartDrawer} />
          <Title titleName='Wishlist' titleStyles={styles.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.boxWrapper]}
          onPress={handlePressLogout}
          testID='Side-menu-Logout'>
          <Image style={styles.icons} source={IMAGES.iconLogout} />
          <Title titleName='Logout' titleStyles={styles.logoutText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideMenu;
