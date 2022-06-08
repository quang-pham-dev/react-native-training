import React from 'react';

// LIBS
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screen
import SignInScreen from 'screens/SignIn';
import LoginForm from 'screens/SignIn/components/LoginForm';

// Components
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';

// Utils
import { navigationMock } from 'utils/testMock';

// API
import { authService } from 'api/auth.api';

describe('SignIn Screen', () => {
  let tree: any;
  const welcomeText = 'Welcome';
  const subTitleText = 'Please enter your data to continue';

  beforeEach(() => {
    tree = render(<SignInScreen navigation={navigationMock} />);
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

  test('should render loading indicator', () => {
    const tree = renderer.create(<SignInScreen navigation={navigationMock} />);
    const loadingIndicator = tree.root.findAllByType(LoadingIndicator);

    expect(loadingIndicator).toBeTruthy();
  });

  test('should render LoginForm', () => {
    const tree = renderer.create(<SignInScreen navigation={navigationMock} />);
    const loginForm = tree.root.findAllByType(LoginForm);

    expect(loginForm).toBeTruthy();
  });

  test('should handle back button', () => {
    const tree = renderer.create(<SignInScreen navigation={navigationMock} />);
    const Pressabled = tree.root.findAllByType(Button)[0];
    Pressabled.props.onPress();
    expect(navigationMock.goBack).toHaveBeenCalled();
  });

  test('should called function handleSubmitButton', async () => {
    jest.spyOn(authService, 'signIn');
    const username = 'Quangpham';
    const password = '123456';

    render(<SignInScreen navigation={navigationMock} />);

    await authService.signIn(username, password);

    expect(authService.signIn).toHaveBeenCalledTimes(1);
  });
});
