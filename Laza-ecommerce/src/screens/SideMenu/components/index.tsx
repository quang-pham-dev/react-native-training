import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

// Types
import { DrawerItemProps } from 'types/screens/Menu';

// Styles
import styles from './styles';

const DrawerItem = ({ title, source, onPress, titleStyle }: DrawerItemProps) => (
  <Pressable onPress={onPress}>
    <View style={styles.boxWrapper}>
      <Image source={source} style={styles.icons} />
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </View>
  </Pressable>
);

export default DrawerItem;
