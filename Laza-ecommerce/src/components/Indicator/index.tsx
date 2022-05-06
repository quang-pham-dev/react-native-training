import { LOADING_SIZE } from 'constants/Common';
import React from 'react';
import { ActivityIndicator } from 'react-native';
// Types for props
import { LoadingIndicatorProps } from 'types/Indicator';
// styles
import Colors from 'styles/themes/Colors';
import styles from './styles';

const LoadingIndicator = ({
  loadingSize = LOADING_SIZE.LARGE,
  color = Colors.secondaryColor,
}: LoadingIndicatorProps) => (
  <ActivityIndicator style={styles.loading} size={loadingSize} color={color} />
);

export default LoadingIndicator;
