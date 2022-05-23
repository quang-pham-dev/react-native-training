import { StyleSheet } from 'react-native';

// Themes
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {},
  brandTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Metrics.padding.xm,
  },
});

export default styles;
