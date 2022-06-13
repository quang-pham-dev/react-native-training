import React, { memo, useCallback, useState } from 'react';
import { Text } from 'react-native';

// LIBS
import isEqual from 'react-fast-compare';

// Types
import { IMoreLessTextProps } from 'types/components/LessMore';

// Styles
import styles from './styles';

const MoreLessText = ({ children, numberOfLines, styleShowMoreText }: IMoreLessTextProps) => {
  const [isTruncatedText, setIsTruncatedText] = useState(false);
  const [showMore, setShowMore] = useState(true);

  // handle action press show more text
  const handleShowMore = useCallback(() => {
    setShowMore(!showMore);
  }, [showMore]);

  return isTruncatedText ? (
    <>
      <Text
        style={[styles.readMoreText, styleShowMoreText]}
        numberOfLines={showMore ? numberOfLines : 0}
      >
        {children}
      </Text>
      <Text style={styles.readMoreText} onPress={handleShowMore}>
        {showMore ? 'Read More' : 'Less'}
      </Text>
    </>
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
};

export default memo(MoreLessText, isEqual);
