import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Types
import { BottomButtonProps } from 'types/Button';
// Styles
import styles from './styles';

const BottomButton = ({
  title,
  disabled,
  buttonStyles = [],
  children = [],
  onPress = () => {},
}: BottomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.title]}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default memo(BottomButton);
