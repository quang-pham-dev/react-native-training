import React, { memo } from 'react';
import { Text, View } from 'react-native';
import isEqual from 'react-fast-compare';

// Types
import { ILabelTextProps } from 'types/components/Label';

// Styles
import styles from './styles';

const Label = ({
  labelName,
  fontSize,
  fontFamily,
  color,
  labelWrapperStyles,
  lineHeight,
}: ILabelTextProps) => {
  const labelStyles = {
    fontSize: fontSize,
    fontFamily: fontFamily,
    color,
    ...(lineHeight && { lineHeight }),
  };
  return (
    <View style={labelWrapperStyles}>
      <Text style={[styles.labelText, labelStyles]}>{labelName}</Text>
    </View>
  );
};

export default memo(Label, isEqual);
