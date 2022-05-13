import { StyleSheet } from 'react-native';
// Themes
import { Colors, Metrics } from 'styles/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.margin.lg,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: Colors.secondaryBackground,
    borderRadius: Metrics.borderRadius.roundedMedium,
  },
  iconSearchWrapper: {
    width: Metrics.icons.standard,
    height: Metrics.icons.standard,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: Metrics.padding.xm,
  },
  iconSearch: {
    width: '100%',
    height: '100%',
  },
  input: {
    alignItems: 'flex-start',
    paddingLeft: Metrics.margin.md,
  },
  iconVoiceWrapper: {
    marginLeft: Metrics.margin.sm,
  },
  iconVoice: {
    width: Metrics.icons.large,
    height: Metrics.icons.large,
    alignSelf: 'center',
  },
});

export default styles;
