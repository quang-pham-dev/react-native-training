import React from 'react';
import renderer from 'react-test-renderer';
import GetStartedScreen from 'screens/GetStarted';

describe('GetStarted Screen', () => {
  let navigation: any;
  let route: any;

  beforeEach(() => {
    route = {
      getParam: jest.fn(),
      setParams: jest.fn(),
      goBack: jest.fn(),
      navigate: jest.fn(),
    };
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should render correctly', () => {
    const tree = renderer
      .create(<GetStartedScreen navigation={navigation} route={route} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
