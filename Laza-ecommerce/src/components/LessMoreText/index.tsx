import React, { useState } from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
// Styles
import styles from './styles';

type MoreLessTextProps = {
  children?: React.ReactNode;
  numberOfLines: number;
  styleShowMoreText?: StyleProp<TextStyle>;
};

export function MoreLessText({ children, numberOfLines, styleShowMoreText }: MoreLessTextProps) {
  const [isTruncatedText, setIsTruncatedText] = useState(false);
  const [showMore, setShowMore] = useState(true);

  return isTruncatedText ? (
    <View style={[styles.showMoreContainer]}>
      <Text
        style={[styles.readMoreText, styleShowMoreText]}
        numberOfLines={showMore ? numberOfLines : 0}
      >
        {children}
      </Text>
      <Text style={styles.readMoreText} onPress={() => setShowMore(!showMore)}>
        {showMore ? 'Read More' : 'Less'}
      </Text>
    </View>
  ) : (
    <Text
      style={[styles.readMoreText, styleShowMoreText]}
      onTextLayout={event => {
        const { lines } = event.nativeEvent;
        setIsTruncatedText(lines?.length > numberOfLines);
      }}
    >
      {children}
    </Text>
  );
}
