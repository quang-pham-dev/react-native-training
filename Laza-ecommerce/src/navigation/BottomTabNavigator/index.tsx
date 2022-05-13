import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import DraffScreen from 'screens/Draff';
import HomeScreen from 'screens/Home';
// constants
import Screens from 'constants/Screens';
// Themes
import { Colors, IMAGES } from 'styles/themes';

interface Props {
  source?: ImageSourcePropType;
  onPress: () => void;
  badge?: boolean;
  badgeCount?: number;
}

const MenuButton = ({
  source = IMAGES.iconMenu,
  onPress,
  badge = false,
  badgeCount = 0,
}: Props) => {
  return (
    <TouchableOpacity style={styles.headerButtonContainer} onPress={onPress}>
      <Image style={styles.headerButtonImage} source={source} />
      {badge ? (
        <View style={styles.badge}>
          <Text style={{ fontSize: 10 }}>{badgeCount}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerButtonContainer: {},
  headerButtonImage: {},
  badge: {},
});

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display t switch screens.
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Home' // The initial route to display. If not initialRouteName, the first screen will be the root screen.
      screenOptions={{
        tabBarActiveTintColor: Colors.primaryColor,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 0,
        },
      }}
    >
      <BottomTab.Screen
        name={Screens.Home.name}
        component={HomeScreen}
        options={{
          tabBarLabel: Screens.Home.label,
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <Image
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? Colors.primaryColor : color,
                }}
                source={IMAGES.iconHome}
                resizeMode='contain'
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.WishList.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.WishList.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconHeart}
                resizeMode='contain'
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.Bag.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.Bag.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconBag}
                resizeMode='contain'
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={Screens.Wallet.name}
        component={DraffScreen}
        options={{
          tabBarLabel: Screens.Wallet.label,
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                style={{ width: size, height: size, tintColor: color }}
                source={IMAGES.iconWallet}
                resizeMode='contain'
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
