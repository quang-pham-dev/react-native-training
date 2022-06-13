import { StyleSheet } from 'react-native';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  productCardContainer: {
    width: 165
  },

  imageWrapper: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: Colors.secondaryBackground
  },

  image: {
    width: '100%',
    height: 203,
    alignItems: 'flex-end',
    resizeMode: 'contain'
  },

  iconHeartWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  },

  iconHeart: {
    width: 16,
    height: 15,
    resizeMode: 'contain',
    marginTop: 17,
    marginRight: 14
  },

  productTitle: {
    fontSize: Fonts.size.min,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textBlack,
    marginTop: Metrics.margin.xsm
  },

  productType: {
    fontSize: Fonts.size.min,
    fontFamily: Fonts.fontFamily.Inter_500Medium,
    color: Colors.textBlack,
    marginBottom: Metrics.margin.xsm
  },

  price: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.fontFamily.Inter_600SemiBold,
    color: Colors.textBlack,
    marginTop: Metrics.margin.xsm
  }
});

export default styles;
