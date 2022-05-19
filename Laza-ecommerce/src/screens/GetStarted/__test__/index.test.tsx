import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import GetStartedScreen from 'screens/GetStarted';

describe('GetStarted Screen', () => {
  let navigation: any;
  let tree: any;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
    tree = render(<GetStartedScreen navigation={navigation} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Let’s Get Started Text', () => {
    const { getByText } = tree;
    expect(getByText('Let’s Get Started')).toBeTruthy();
  });

  test('should navigate to SignIn Screen', () => {
    const { getByTestId } = tree;
    const link = getByTestId('LinkToSignIn');
    fireEvent(link, 'press');
    expect(navigation.navigate).toHaveBeenCalledWith('SignIn');
  });
});
