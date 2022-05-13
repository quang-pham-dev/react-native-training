import { StyleSheet } from 'react-native';
import { Metrics } from 'styles/themes';
const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.margin.xm,
  },
  productTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productCard: {
    marginTop: Metrics.margin.xm,
  },
  columnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
