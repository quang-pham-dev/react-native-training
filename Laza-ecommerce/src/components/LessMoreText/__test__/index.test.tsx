import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import MoreLessText from 'components/LessMoreText';

describe('Read more Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<MoreLessText numberOfLines={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
