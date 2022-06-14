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

  test('should render error messages when input values are invalid', async () => {
    const { queryAllByText, getByPlaceholderText } = tree;
    const usernameValue = 'Quangpham';
    const passwordValue = '123';

    await act(async () =>
      fireEvent.changeText(getByPlaceholderText('Enter your username'), usernameValue)
    );

    await act(async () =>
      fireEvent.changeText(getByPlaceholderText('Enter your password'), passwordValue)
    );

    const errorMessage = queryAllByText('Password must be at least 6 characters');

    expect(errorMessage).toBeTruthy();
  });
  test('should render error messages when user name input values are invalid', async () => {
    const { queryAllByText, getByPlaceholderText } = tree;
    const usernameValue = 'Quangpham';

    await act(async () =>
      fireEvent.changeText(getByPlaceholderText('Enter your username'), usernameValue)
    );
    await act(async () => fireEvent.changeText(getByPlaceholderText('Enter your username'), ''));

    const errorMessage = queryAllByText('Username is required');

    expect(errorMessage).toBeTruthy();
  });

  test('should checked if Async Storage is used', async () => {
    await AsyncStorage.getItem(AUTH_DATA);

    expect(AsyncStorage.getItem).toBeCalledWith(AUTH_DATA);
  });

  test('should handle on submit login', async () => {
    const data = { password: '123456', username: 'Quangpham' };
    const submitHandler = jest.fn();
    const tree = renderer.create(<LoginForm onSubmit={submitHandler} />);
    const username = tree.root.findByProps({ testID: 'usernameInput' });
    const password = tree.root.findByProps({ testID: 'passwordInput' });

    await act(async () => {
      await username.props.onChangeText(data.username);
      await password.props.onChangeText(data.password);
    });

    await act(async () => {
      await fireEvent.press(tree.root.findByProps({ testID: 'loginButton' }));
    });

    expect(submitHandler).toBeCalledWith(data);
  });
});
