import React from 'react';

// LIBS
import { act, fireEvent, render } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import renderer from 'react-test-renderer';

// Components
import LoginForm from 'screens/SignIn/components/LoginForm';

// constants
import { AUTH_DATA } from 'constants/Common';

// Types
import { ILoginCredentials } from 'types/models/User';

const mockLogin = jest.fn((data: ILoginCredentials) => {
  return Promise.resolve({ data });
});

describe('Login Form', () => {
  let tree: any;
  beforeEach(() => {
    tree = render(<LoginForm onSubmit={mockLogin} />);
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

    await act(async () =>
      fireEvent.changeText(getByPlaceholderText('Enter your username'), usernameValue),
    );
    await act(async () =>
      fireEvent.changeText(getByPlaceholderText('Enter your password'), passwordValue),
    );

    const errorMessage = queryAllByText('Password must be at least 6 characters');

    expect(errorMessage).not.toBeNull();
  });

  //check with mock async storage value
  test('checks if Async Storage is used', async () => {
    await AsyncStorage.getItem(AUTH_DATA);

    expect(AsyncStorage.getItem).toBeCalledWith(AUTH_DATA);
  });
});
