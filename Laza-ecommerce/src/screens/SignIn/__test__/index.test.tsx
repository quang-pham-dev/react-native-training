import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import SignInScreen from 'screens/SignIn';
import { IUserSignIn } from 'types/models/User';
import { AUTH_DATA } from 'constants/Common';
import { navigationMock } from 'utils/testMock';
import { get } from 'utils/localStorage';

const mockLogin = jest.fn((data: IUserSignIn) => {
  return Promise.resolve({ data });
});

describe('SignIn Screen', () => {
  let tree: any;

  const welcomeText = 'Welcome';
  const subTitleText = 'Please enter your data to continue';

  beforeEach(() => {
    jest.useFakeTimers();
    tree = render(<SignInScreen navigation={navigationMock} onSubmit={mockLogin} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Welcome text', () => {
    const { getByText } = tree;
    expect(getByText(welcomeText)).toBeTruthy();
  });

  test('should render subheader text', () => {
    const { getByText } = tree;
    expect(getByText(subTitleText)).toBeTruthy();
  });
});
