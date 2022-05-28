import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import renderer from 'react-test-renderer';

import { ILoginCredentials } from 'types/models/User';
import { AUTH_DATA } from 'constants/Common';
import { navigationMock } from 'utils/testMock';
import LoginForm from 'screens/SignIn/components/LoginForm';
import { Alert } from 'react-native';
import { AppContext } from 'context/AppContext';

const mockLogin = jest.fn((data: ILoginCredentials) => {
  return Promise.resolve({ data });
});

describe('Login Form', () => {
  let tree: any;
  beforeEach(() => {
    jest.spyOn(Alert, 'alert');
    tree = render(<LoginForm onSubmit={mockLogin} />);

    const appContext = {
      authDispatch: jest.fn(),
      authState: {
        isAuthenticated: false,
        user: null,
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render forgot password text', () => {
    const { getByText } = tree;
    expect(getByText('Forgot password?')).toBeTruthy();
  });

  test('should render remember me text', () => {
    const { getByText } = tree;
    expect(getByText('Remember me')).toBeTruthy();
  });

  test('should not render error messages when input values are valid', async () => {
    const { queryAllByText, getByPlaceholderText } = tree;
    const usernameValue = 'Quangpham';
    const passwordValue = '12345';

    fireEvent.changeText(getByPlaceholderText('Enter your username'), usernameValue);
    fireEvent.changeText(getByPlaceholderText('Enter your password'), passwordValue);

    const errorMessage = queryAllByText('Password must be at least 6 characters');

    expect(errorMessage).not.toBeNull();
  });

  //check with mock async storage value
  test('checks if Async Storage is used', async () => {
    await AsyncStorage.getItem(AUTH_DATA);

    expect(AsyncStorage.getItem).toBeCalledWith(AUTH_DATA);
  });
});
