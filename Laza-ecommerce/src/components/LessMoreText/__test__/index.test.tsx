import React from 'react';
import renderer from 'react-test-renderer';

import MoreLessText from 'components/LessMoreText';

describe('Read more Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<MoreLessText numberOfLines={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
