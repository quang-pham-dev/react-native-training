import React from 'react';
import renderer from 'react-test-renderer';
import Title from 'components/Title';
import { Colors, Fonts } from 'styles/themes';

describe('Title Component', () => {
  test('should render  correctly', () => {
    const tree = renderer
      .create(
        <Title
          titleName='Welcome'
          fontSize={Fonts.size.h5}
          fontFamily={Fonts.fontFamily.Inter_500Medium}
          color={Colors.textBlack}
        ></Title>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
