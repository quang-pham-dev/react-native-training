import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

// Types
import { ILoadingIndicatorProps } from 'types/components/LoadingIndicator';
import { LOADING_SIZE } from 'types/common/Enums';

// Themes
import Colors from 'themes/Colors';

// Styles
import styles from './styles';

const LoadingIndicator = ({
  loadingSize = LOADING_SIZE.LARGE,
  color = Colors.secondaryColor,
}: ILoadingIndicatorProps) => (
  <ActivityIndicator style={styles.loading} size={loadingSize} color={color} />
);

export default memo(LoadingIndicator);
