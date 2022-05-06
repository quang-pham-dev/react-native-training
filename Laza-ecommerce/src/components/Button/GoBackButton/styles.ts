// Styles
import { Metrics } from '@styles/themes/index';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginTop: Metrics.margin.customXxl,
    marginLeft: Metrics.margin.lg,
    alignItems: 'center',
  },
  icon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge,
  },
});

export default styles;
