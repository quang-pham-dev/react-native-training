import { StyleSheet } from 'react-native';
// Theme
import { Colors, Metrics } from 'styles/themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  menuWrapper: {
    backgroundColor: Colors.primaryBackground,
  },
  menuIcon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge,
  },

  cartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: Metrics.icons.semiLarge,
    height: Metrics.icons.semiLarge,
  },
});

export default styles;
