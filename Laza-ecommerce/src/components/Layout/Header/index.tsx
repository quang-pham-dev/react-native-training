import React, { memo } from 'react';
import { Image, Pressable, View } from 'react-native';
// Themes
import { IMAGES } from 'styles/themes';
// Types
import { HeaderProps } from 'types/Screens';
// Styles
import styles from './styles';

const Header = ({ navigation }: HeaderProps) => {
  // Toggle menu open
  const handleToggleMenu = () => {
    navigation.toggleDrawer();
  };

  // TODO feature currently not developed yet
  const handlePressCart = () => {};

  return (
    <View style={styles.container}>
      <Pressable style={styles.menuWrapper} onPress={handleToggleMenu}>
        <Image style={styles.menuIcon} source={IMAGES.iconMenu} />
      </Pressable>
      <Pressable style={styles.cartWrapper} onPress={handlePressCart}>
        <Image style={styles.cartIcon} source={IMAGES.iconCart} />
      </Pressable>
    </View>
  );
};

export default memo(Header);
