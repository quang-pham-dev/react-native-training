import React from 'react';
import { Text, TextProps, View } from 'react-native';

// Styles
import styles from './styles';

interface CustomTextProps extends TextProps {
  titleName?: string | undefined;
  titleAlign?: 'left' | 'center' | 'right';
}
const Title = ({ style, titleName, titleAlign = 'left' }: CustomTextProps) => {
  const titleStyle = [styles.title, style];

  switch (titleAlign) {
    case 'left':
      titleStyle.push(styles.titleLeft);
      break;
    case 'center':
      titleStyle.push(styles.titleCenter);
      break;
    case 'right':
      titleStyle.push(styles.titleRight);
      break;
    default:
      titleStyle;
      break;
  }

  return <Text style={titleStyle}>{titleName}</Text>;
};

Title.HeadingPage = ({ style, titleName, titleAlign }: CustomTextProps) => {
  return (
    <Title titleName={titleName} style={[styles.headingPage, style]} titleAlign={titleAlign} />
  );
};

Title.subHeadingPage = ({ style, titleName, titleAlign }: CustomTextProps) => {
  return (
    <Title titleName={titleName} style={[styles.subHeadingPage, style]} titleAlign={titleAlign} />
  );
};

Title.titleLeftSection = ({ style, titleName, titleAlign }: CustomTextProps) => {
  return (
    <Title titleName={titleName} style={[styles.titleLeftSection, style]} titleAlign={titleAlign} />
  );
};

Title.titleRightSection = ({ style, titleName, titleAlign }: CustomTextProps) => {
  return (
    <Title
      titleName={titleName}
      style={[styles.titleRightSection, style]}
      titleAlign={titleAlign}
    />
  );
};

export default Title;
