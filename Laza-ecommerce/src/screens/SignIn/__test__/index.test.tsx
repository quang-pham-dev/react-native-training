import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import SignInScreen from 'screens/SignIn';
import { LoginBody } from 'types/Auth';

const mockLogin = jest.fn((data: LoginBody) => {
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

  test('should have a login button', async () => {
    const { getByTestId } = tree;
    const button = getByTestId('loginButton');

    expect(button).toBeTruthy();
  });

  test('on submit login successfully', async () => {
    const { getByTestId } = tree;
    const username = getByTestId('usernameInput');
    fireEvent.changeText(username, 'Quangpham');
    const password = getByTestId('passwordInput');
    fireEvent.changeText(password, '123456');
    const button = getByTestId('loginButton');

    expect(username.props.value).toEqual('Quangpham');
    expect(password.props.value).toEqual('123456');

    // use fireEvent.press call Button submit
    await waitFor(async () => {
      fireEvent.press(button);
    });

    expect(mockLogin).toBeTruthy();
  });
});
