import React, { memo, useContext, useState } from 'react';
import { Alert, Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Components
import Button from 'components/Button';
// Screens
import Screens from 'constants/Screens';
// Theme
import { IMAGES } from 'styles/themes';
// Styles
import styles from './styles';
// Types
import { SideMenuPros } from 'types/Menu';
import { SIGN_OUT } from 'types/Actions';
// API
import { authService } from 'api';
// Context
import { AppContext } from 'context/AppContext';
// Constants
import { AuthData } from 'constants/Common';

const SideMenu = ({ navigation }: SideMenuPros) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { authState, authDispatch } = useContext(AppContext);
  // TODO get Order from API Because feature is not developed yet
  const orderCount = 3;

  // handel action sign out
  const handlePressLogout = () => {
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: async () => {
          navigation.toggleDrawer();
          try {
            await authService.signOut();
            await AsyncStorage.removeItem(AuthData);
            authDispatch({
              type: SIGN_OUT,
            });
          } catch (error) {
            Alert.alert('Error', error.message);
          }
        },
      },
    ]);
  };

  // Toggle menu open or close
  const handleToggleMenu = () => {
    navigation.toggleDrawer();
  };

  // handle action navigate to Bag screen
  const handleNavigateToBagScreen = () => {
    navigation.navigate(Screens.Bag.name);
  };

  // handle action navigate to WishList screen
  const handleNavigateToWishlistScreen = () => {
    navigation.navigate(Screens.WishList.name);
  };

  // handle action navigate to Wallet screen
  const handleNavigateToWalletScreen = () => {
    navigation.navigate(Screens.Wallet.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconMenuWrapper}>
          <Button
            icon={IMAGES.iconMenuOpen}
            iconStyles={[styles.iconMenu]}
            onPress={handleToggleMenu}
          />
        </View>
        <View style={[styles.infoWrapper]}>
          <View style={styles.profile}>
            <Image style={styles.avatar} source={IMAGES.iconAvatar} />
            <View style={styles.profileInfoWrapper}>
              {authState?.currentUser?.username ? (
                <Text style={styles.accountName}>{authState?.currentUser?.username}</Text>
              ) : null}
              <View style={styles.verifiedWrapper}>
                <Text style={styles.verifiedText}>Verified Profile</Text>
                <Image style={styles.iconBadge} source={IMAGES.iconBadge} />
              </View>
            </View>
          </View>
          <View style={styles.orderInfo}>
            {/* // TODO : get order info from store or current state */}
            <Text style={styles.textOrder}>{orderCount} Orders</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={[styles.darkModeWrapper]}>
          <View style={[styles.darkMode]}>
            <Image style={styles.icons} source={IMAGES.iconSun} />
            <Text style={styles.text}>Dark Mode</Text>
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
        <TouchableOpacity style={[styles.boxWrapper]} onPress={() => {}}>
          <Image style={styles.icons} source={IMAGES.iconInfo} />
          <Text style={styles.text}>Account Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxWrapper]} onPress={handleNavigateToBagScreen}>
          <Image style={styles.icons} source={IMAGES.iconBagDrawer} />
          <Text style={styles.text}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxWrapper]} onPress={handleNavigateToWalletScreen}>
          <Image style={styles.icons} source={IMAGES.iconWalletDrawer} />
          <Text style={styles.text}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boxWrapper]} onPress={handleNavigateToWishlistScreen}>
          <Image style={styles.icons} source={IMAGES.iconHeartDrawer} />
          <Text style={styles.text}>Wishlist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.boxWrapper]} onPress={handlePressLogout}>
          <Image style={styles.icons} source={IMAGES.iconLogout} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SideMenu);
