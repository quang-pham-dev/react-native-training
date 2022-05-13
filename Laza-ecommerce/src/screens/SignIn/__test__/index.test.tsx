import { render } from '@testing-library/react-native';
import React from 'react';
import SignInScreen from 'screens/SignIn';
describe('SignIn Screen', () => {
  let navigation: any;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const tree = render(<SignInScreen navigation={navigation} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
