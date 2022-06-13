import { StyleSheet } from 'react-native';

// Themes
import Metrics from 'themes/Metrics';

const styles = StyleSheet.create({
  productImageReview: {
    flexDirection: 'row',
    marginVertical: Metrics.margin.xm
  },

  productImageReviewWrapper: {
    width: 77,
    height: 77,
    marginRight: 9
  },

  imagePreview: {
    width: '100%',
    height: '100%'
  }
});

export default styles;
