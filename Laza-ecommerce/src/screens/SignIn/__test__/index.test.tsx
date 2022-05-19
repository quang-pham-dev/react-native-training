import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import SignInScreen from 'screens/SignIn';
import { UserSignIn } from 'types/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_DATA } from 'constants/Common';

const mockLogin = jest.fn((data: UserSignIn) => {
  return Promise.resolve({ data });
});

describe('SignIn Screen', () => {
  let navigation: any;
  let tree: any;

  beforeEach(() => {
    tree = render(<SignInScreen navigation={navigation} onSubmit={mockLogin} />);
    navigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Welcome text', () => {
    const { getByText } = tree;
    expect(getByText('Welcome')).toBeTruthy();
  });

  test('should render subheader text', () => {
    const { getByText } = tree;
    expect(getByText('Please enter your data to continue')).toBeTruthy();
  });
  test('should render forgot password text', () => {
    const { getByText } = tree;
    expect(getByText('Forgot password?')).toBeTruthy();
  });

  test('should render remember me text', () => {
    const { getByText } = tree;
    expect(getByText('Remember me')).toBeTruthy();
  });
  test('should render By connecting your account confirm that you agree with our text', () => {
    const { getByText } = tree;
    expect(getByText('By connecting your account confirm that you agree with our')).toBeTruthy();
  });

  it('Does not show error messages when input values are valid', () => {
    const { getByTestId, queryAllByText } = tree;

    const usernameInput = getByTestId('usernameInput');
    const passwordInput = getByTestId('passwordInput');
    act(() => {
      fireEvent.changeText(usernameInput, 'Quangpham');
      fireEvent.changeText(passwordInput, '123456');
    });

    expect(queryAllByText('Password must be at least 6 characters')).toHaveLength(0);
  });

  test('should display required error when value is invalid', async () => {
    const { getByTestId, getByRole } = tree;

    const button = getByTestId('loginButton');

    await waitFor(async () => {
      fireEvent.press(button);
    });

    const errorMessage = getByRole('text');

    await waitFor(() => expect(errorMessage).not.toBeNull());
    expect(mockLogin).not.toBeCalled();
  });

  it('change text username and password', () => {
    const { getByTestId } = tree;

    // use fireEvent change value TextInput
    fireEvent.changeText(getByTestId('usernameInput'), 'Quangpham');
    fireEvent.changeText(getByTestId('passwordInput'), '123456');

    // use toEqual check value TextInput
    expect(getByTestId('usernameInput').props.value).toEqual('Quangpham');
    expect(getByTestId('passwordInput').props.value).toEqual('123456');
  });

  //check with mock async storage value
  test('checks if Async Storage is used', async () => {
    await AsyncStorage.getItem(AUTH_DATA);

    expect(AsyncStorage.getItem).toBeCalledWith(AUTH_DATA);
  });

  test('should have a login button', async () => {
    const { getByTestId } = tree;
    const button = getByTestId('loginButton');

    expect(button).toBeTruthy();
  });

  test('should go to Home Screen when press loginButton', async () => {
    const { getByTestId, getByText } = tree;
    const loginButton = getByTestId('loginButton');
    await waitFor(async () => {
      fireEvent.press(loginButton);
    });
    waitFor(() => expect(getByText('Hello')));
  });
});
