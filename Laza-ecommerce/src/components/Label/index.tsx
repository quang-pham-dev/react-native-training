import React, { memo } from 'react';
import { Text, View } from 'react-native';
// Types
import { labelTextProps } from 'types/Label';
// Styles
import styles from './styles';

const Label = ({ labelName, labelStyles, hasBorder, labelWrapperStyles }: labelTextProps) => (
  <View
    style={[styles.labelContainer, hasBorder && styles.labelContainerBorder, labelWrapperStyles]}
  >
    <Text style={[styles.labelText, labelStyles]}>{labelName}</Text>
  </View>
);

export default memo(Label);
