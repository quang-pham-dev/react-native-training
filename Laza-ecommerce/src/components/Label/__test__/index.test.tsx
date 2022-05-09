import React from 'react';
import renderer from 'react-test-renderer';
import Label from 'components/Label';
import { Colors, Fonts } from 'styles/themes';

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
