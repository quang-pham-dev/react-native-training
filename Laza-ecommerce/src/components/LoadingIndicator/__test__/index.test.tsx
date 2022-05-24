import React from 'react';

import LoadingIndicator from 'components/LoadingIndicator';
import renderer from 'react-test-renderer';

describe('LoadingIndicator Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<LoadingIndicator size='large' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render color LoadingIndicator correctly', () => {
    const tree = renderer.create(<LoadingIndicator size='small' color='red' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
