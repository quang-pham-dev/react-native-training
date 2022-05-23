import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';

// Types
import { IMoreLessTextProps } from 'types/components/LessMore';

// Styles
import styles from './styles';

const MoreLessText = ({ children, numberOfLines, styleShowMoreText }: IMoreLessTextProps) => {
  const [isTruncatedText, setIsTruncatedText] = useState(false);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);

  return isTruncatedText ? (
    <View style={[styles.showMoreContainer]}>
      <Text
        style={[styles.readMoreText, styleShowMoreText]}
        numberOfLines={showMore ? numberOfLines : 0}>
        {children}
      </Text>
      <Text style={styles.readMoreText} onPress={handleShowMore}>
        {showMore ? 'Read More' : 'Less'}
      </Text>
    </View>
  ) : (
    <Text
      style={[styles.readMoreText, styleShowMoreText]}
      onTextLayout={event => {
        const { lines } = event.nativeEvent;
        setIsTruncatedText(lines?.length > numberOfLines);
      }}>
      {children}
    </Text>
  );
};

export default MoreLessText;
