import React, { useCallback } from 'react';
import { View, Text, Pressable, Image } from 'react-native';

// Types
import { DrawerItemProps } from 'types/screens/Menu';

// Styles
import styles from './styles';

const DrawerItem = ({ title, source, onPress, titleStyle }: DrawerItemProps) => {
  const handlePressItem = useCallback(() => {
    onPress();
  }, [onPress]);
  return (
    <Pressable onPress={handlePressItem}>
      <View style={styles.boxWrapper}>
        <Image source={source} style={styles.icons} />
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default DrawerItem;
