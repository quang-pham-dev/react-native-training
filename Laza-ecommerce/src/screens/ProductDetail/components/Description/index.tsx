import React, { memo } from 'react';
import { View } from 'react-native';

// Components
import Title from 'components/Title';
import MoreLessText from 'components/LessMoreText';

// Types
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Styles
import styles from './styles';

const Description = ({ description }: IProductDetailItemProps) => {
  return (
    <View style={styles.descriptionContainer}>
      <Title.titleLeftSection titleName='Description' style={styles.textDescriptionTitle} />
      {Boolean(description) && (
        <MoreLessText styleShowMoreText={styles.textContent} numberOfLines={3}>
          {description}
        </MoreLessText>
      )}
    </View>
  );
};

export default memo(Description);
