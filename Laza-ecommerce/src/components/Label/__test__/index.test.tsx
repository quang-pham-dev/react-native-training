import React from 'react';
import renderer from 'react-test-renderer';

import Label from 'components/Label';
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';

describe('Label Component', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Label
          labelName='XXL'
          fontFamily={Fonts.fontFamily.Inter_400Regular}
          color={Colors.textBlack}
          lineHeight={15}
          fontSize={17}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
