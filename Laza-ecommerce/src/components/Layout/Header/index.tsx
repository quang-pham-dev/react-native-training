import React, { memo, useCallback } from 'react';
import { Image, Pressable, View } from 'react-native';

// Types
import { IHeaderProps } from 'types/screens/Layout';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';
import { DrawerActions } from '@react-navigation/native';

const Header = ({ navigation }: IHeaderProps) => {
  // Toggle menu open
  const handleToggleMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);

  const handlePressCart = useCallback(() => {}, []);

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
