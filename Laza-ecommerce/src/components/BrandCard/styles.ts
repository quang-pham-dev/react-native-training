import { StyleSheet } from 'react-native';
import { Colors, Metrics } from 'styles/themes';
const styles = StyleSheet.create({
  brandCardContainer: {
    justifyContent: 'center',
  },
  brandCardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    backgroundColor: Colors.secondaryBackground,
    marginRight: Metrics.margin.sm,
    paddingRight: Metrics.padding.sm,
  },
  brandLogoWrapper: {
    width: 40,
    height: 40,
    padding: Metrics.padding.xs,
    borderRadius: 10,
    marginLeft: Metrics.margin.xsm,
    marginRight: Metrics.margin.sm,
    marginVertical: Metrics.margin.xsm,
    backgroundColor: Colors.primaryBackground,
  },
  brandLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: Colors.transparent,
  },
});

export default styles;
