import React, { memo } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Types
import { IButtonProps } from 'types/components/Button';

// Styles
import styles from './styles';

const Button = ({
  onPressHandler = () => {},
  text,
  textStyles,
  buttonStyles,
  icon,
  iconStyles,
  disabled,
  children,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[buttonStyles]}
      onPress={onPressHandler}
      disabled={disabled}
      activeOpacity={0.8}>
      {icon && <Image style={[styles.icon, iconStyles]} source={icon} />}
      {text && <Text style={[textStyles]}>{text}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button, isEqual);
