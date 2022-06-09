import { StyleSheet } from 'react-native';

// Themes
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.margin.xm,
  },

  productCard: {
    marginBottom: Metrics.margin.xm,
  },
  columnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.margin.xm,
  },
});

export default styles;
