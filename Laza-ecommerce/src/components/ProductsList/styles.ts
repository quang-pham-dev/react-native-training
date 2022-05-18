import { StyleSheet, Platform } from 'react-native';
import { Metrics } from 'styles/themes';
const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.margin.xm,
    marginBottom: Platform.OS === 'android' ? 100 : 70,
  },

  productCard: {
    marginBottom: Metrics.margin.xm,
  },
  columnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
