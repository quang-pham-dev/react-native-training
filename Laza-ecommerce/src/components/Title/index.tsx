import React, { memo } from 'react';
import { Text } from 'react-native';
// Types
import { titleProps } from 'types/Title';
// Styles
import styles from './styles';

const Title = ({ titleName, titleStyles }: titleProps) => {
  return <Text style={[styles.title, titleStyles]}>{titleName}</Text>;
};

export default memo(Title);
