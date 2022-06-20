import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import Title from 'components/Title';
import MoreLessText from 'components/LessMoreText';

// Types
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Themes
import IMAGES from 'themes/Images';

// Styles
import styles from './styles';

const Reviews = ({ comment, rating, reviewers }: IProductDetailItemProps) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewTitleWrapper}>
        <Title.titleLeftSection titleName='Reviews' />
        <Title.titleRightSection titleName='View All' />
      </View>
      {/* End of reviews Title */}

      <View style={styles.reviewWrapper}>
        <View style={styles.reviewItemWrapper}>
          <View style={styles.reviewerInfoWrapper}>
            <Image style={styles.imageAvatar} source={{ uri: reviewers?.image }} />

            <View style={styles.reviewerItemInfo}>
              <Text style={styles.textName}>{reviewers?.name}</Text>

              <View style={styles.reviewTime}>
                <Image style={styles.imageClock} source={IMAGES.iconClock} />
                <Text style={styles.textDate}>{reviewers?.date}</Text>
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

export default memo(Reviews, isEqual);
