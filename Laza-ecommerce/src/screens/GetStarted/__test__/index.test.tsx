import React from 'react';
import renderer from 'react-test-renderer';
import GetStartedScreen from 'screens/GetStarted';

describe('GetStarted Screen', () => {
  test('should render correctly', () => {
    const navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
    const tree = renderer.create(<GetStartedScreen navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
