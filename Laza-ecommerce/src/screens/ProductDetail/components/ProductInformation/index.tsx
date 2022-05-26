import React, { memo } from 'react';
import { View, Text } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Components
import Title from 'components/Title';

//Types
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Styles
import styles from './styles';

const ProductDetailInformation = ({ product }: IProductDetailItemProps) => {
  const { title, price, type } = product || {};

  return (
    <View style={styles.productInfoContainer}>
      <View style={styles.productInfoWrapper}>
        {Boolean(title && type) && (
          <>
            <Title titleName={title} titleStyles={styles.textTitle} />
            <Title titleName={type} titleStyles={styles.textValue} />
          </>
        )}
      </View>

      <View style={styles.productInfoWrapper}>
        <Title titleName='Price' titleStyles={styles.textTitle} />
        {Boolean(price) && <Text style={styles.textValue}>{`$${price}`}</Text>}
      </View>
    </View>
  );
};

export default memo(ProductDetailInformation, isEqual);
