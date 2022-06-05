import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import MoreLessText from 'components/LessMoreText';

describe('Read more Component', () => {
  const props = {
    numberOfLines: 2,
    styleShowMoreText: { color: 'red' },
  };

  test('should render correctly', () => {
    const tree = renderer.create(<MoreLessText {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render correctly with children', () => {
    const tree = renderer.create(<MoreLessText {...props}>Hello</MoreLessText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
