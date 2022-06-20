import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface centerViewProps {
  children: React.ReactNode;
}

export default function CenterView({ children }: centerViewProps) {
  return <View style={styles.container}>{children}</View>;
}
