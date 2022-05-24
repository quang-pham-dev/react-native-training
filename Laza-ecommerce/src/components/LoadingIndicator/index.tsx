import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import isEqual from 'react-fast-compare';

// Types
import { ILoadingIndicatorProps } from 'types/components/LoadingIndicator';
import { LOADING_SIZE } from 'types/common/Enums';

// Themes
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const LoadingIndicator = ({
  size = LOADING_SIZE.LARGE,
  color = Colors.secondaryColor,
}: ILoadingIndicatorProps) => (
  <ActivityIndicator style={styles.loading} size={size} color={color} />
);

export default memo(LoadingIndicator, isEqual);
