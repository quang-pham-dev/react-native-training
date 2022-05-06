import React from 'react';
import LoadingIndicator from 'components/Indicator';
import renderer from 'react-test-renderer';

describe('LoadingIndicator Component', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<LoadingIndicator loadingSize='large' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render color LoadingIndicator correctly', () => {
    const tree = renderer.create(<LoadingIndicator loadingSize='small' color='red' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
