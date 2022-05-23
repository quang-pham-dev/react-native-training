import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import GetStartedScreen from 'screens/GetStarted';
import { navigationMock } from 'utils/testMock';
import { SCREENS_ROUTES } from 'constants/Screens';

describe('GetStarted Screen', () => {
  let tree: any;

  beforeEach(() => {
    tree = render(<GetStartedScreen navigation={navigationMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Let’s Get Started Text', () => {
    const { getByText } = tree;
    expect(getByText('Let’s Get Started')).toBeTruthy();
  });

  test('should render 3 social button', () => {
    const { getByText } = tree;

    const facebookButton = getByText('Facebook');
    const twitterButton = getByText('Twitter');
    const googleButton = getByText('Google');

    expect(facebookButton).toBeTruthy();
    expect(twitterButton).toBeTruthy();
    expect(googleButton).toBeTruthy();
  });

  test('should navigate to SignIn Screen', () => {
    const { getByTestId } = tree;
    const link = getByTestId('LinkToSignIn');
    fireEvent(link, 'press');
    expect(navigationMock.navigate).toHaveBeenCalledWith(SCREENS_ROUTES.AUTH_STACK.SIGN_IN_SCREEN.name);
  });
});
