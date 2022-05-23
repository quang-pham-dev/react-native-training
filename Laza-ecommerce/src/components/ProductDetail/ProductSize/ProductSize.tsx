import React from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';

// Constants
import { PRODUCTS_SIZE } from 'constants/Products';

// Styles
import styles from './styles';

const ProductSize = () => {
  return (
    <View style={styles.sizeContainer}>
      <View style={styles.textSizeWrapper}>
        <Text style={styles.textSize}>Size</Text>
        <Text style={styles.textSizeGuide}>Size Guide</Text>
      </View>
      <ScrollView style={styles.sizeWrapper} horizontal showsHorizontalScrollIndicator={false}>
        {PRODUCTS_SIZE.map((item: string) => (
          <Pressable style={styles.sizeItem} key={item}>
            <Text style={styles.textSize}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductSize;
