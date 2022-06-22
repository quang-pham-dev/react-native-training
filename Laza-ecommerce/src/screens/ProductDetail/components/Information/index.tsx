import React, { memo } from 'react';
import { View, Text } from 'react-native';

//Types
import { IProductDetailItemProps } from 'types/screens/ProductDetail';

// Styles
import styles from './styles';

const Information = ({ title, type, price }: IProductDetailItemProps) => {
  return (
    <View style={styles.productInfoContainer}>
      <View style={styles.productInfoWrapper}>
        {Boolean(title && type) && (
          <>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textValue}>{type}</Text>
          </>
        )}
      </View>

      <View style={styles.productInfoWrapper}>
        <Text style={styles.textTitle}>Price</Text>
        {Boolean(price) && <Text style={styles.textValue}>{`$${price}`}</Text>}
      </View>
    </View>
  );
};

export default memo(Information);
