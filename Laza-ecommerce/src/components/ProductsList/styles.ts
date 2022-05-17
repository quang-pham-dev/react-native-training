import { StyleSheet, Platform } from 'react-native';
import { Metrics } from 'styles/themes';
const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.margin.xm,
    marginBottom: Platform.OS === 'android' ? 100 : 70,
  },
  productTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Metrics.margin.xm,
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
