import React, { memo } from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import Title from 'components/Title';

// Constants
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Types
import { ProductSizeProps } from 'types/models/Products';

// Styles
import styles from './styles';

const ProductSize = ({ sizes }: IProductDetailItemProps) => {
  return (
    <View style={styles.sizeContainer}>
      <View style={styles.textSizeWrapper}>
        <Title.titleLeftSection titleName='Size' />
        <Title.titleRightSection style={styles.textSizeGuide}>Size Guide</Title.titleRightSection>
      </View>

      <ScrollView style={styles.sizeWrapper} horizontal showsHorizontalScrollIndicator={false}>
        {Boolean(sizes) &&
          sizes?.map((item: ProductSizeProps) => (
            <Pressable style={styles.sizeItem} key={item.id}>
              <Title titleName={item.size} />
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
};

export default memo(ProductSize, isEqual);
