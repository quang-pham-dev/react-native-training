import React from 'react';
import renderer from 'react-test-renderer';
import GetStartedScreen from 'screens/GetStarted';

describe('Get Started Screen', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<GetStartedScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
