import React, { memo } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
// Types
import { SocialButtonProps } from 'types/Button';
// Styles
import styles from './styles';

const SocialButton = ({
  icon,
  title,
  disabled,
  buttonStyles = [],
  children = [],
  onPress = () => {},
}: SocialButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      {icon && <Image style={styles.icon} source={icon} />}
      <Text style={[styles.title]}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default memo(SocialButton);
