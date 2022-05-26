import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import Title from 'components/Title';
import MoreLessText from 'components/LessMoreText';

// Styles
import styles from './styles';
import { IProductDetailItemProps } from 'types/screens/ProductDetail';
import IMAGES from 'themes/Images';

const ProductDetailReviews = ({ product }: IProductDetailItemProps) => {
  const { comment, rating, reviewer } = product || {};

  const { name, image, date } = reviewer || {};

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewTitleWrapper}>
        <Title titleName='Reviews' titleStyles={styles.textReviewTitle} />
        <Title titleName='View All' titleStyles={styles.textTitle} />
      </View>
      {/* End of reviews Title */}

      <View style={styles.reviewWrapper}>
        <View style={styles.reviewItemWrapper}>
          <View style={styles.reviewerInfoWrapper}>
            {Boolean(image) && <Image style={styles.imageAvatar} source={{ uri: image }} />}
            <View style={styles.reviewerItemInfo}>
              {Boolean(name) && <Title titleName={name} titleStyles={styles.textName} />}
              <View style={styles.reviewTime}>
                <Image style={styles.imageClock} source={IMAGES.iconClock} />
                {date && <Text style={styles.textDate}>{date}</Text>}
              </View>
            </View>
          </View>
          {/* End of review Info */}

          <View style={styles.reviewItemRating}>
            <View style={styles.ratingTextWrapper}>
              {Boolean(rating) && <Text style={styles.ratingTextPoint}>{rating}</Text>}
              <Text style={styles.ratingText}>rating</Text>
            </View>
            <Image style={styles.imageStar} source={IMAGES.ratingStart} />
          </View>
          {/* End of review Rating */}
        </View>
        <View style={styles.reviewItemContent}>
          {Boolean(comment) && (
            <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={2}>
              {comment}
            </MoreLessText>
          )}
        </View>
        {/* End of review Content */}
      </View>
    </View>
  );
};

export default memo(ProductDetailReviews, isEqual);
