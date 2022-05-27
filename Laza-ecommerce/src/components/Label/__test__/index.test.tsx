import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Label from 'components/Label';

// Themes
import Colors from 'themes/Colors';
import Fonts from 'themes/Fonts';

describe('Label Component', () => {
  const props = {
    labelName: 'Label Name',
    fontSize: 17,
    fontFamily: Fonts.fontFamily.Inter_400Regular,
    color: Colors.textBlack,
    lineHeight: 15,
  };

  test('should render correctly', () => {
    const tree = renderer.create(<Label {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
