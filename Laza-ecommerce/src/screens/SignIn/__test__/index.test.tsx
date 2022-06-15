import React from 'react';

// LIBS
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screen
import SignInScreen from 'screens/SignIn';

// Components
import Button from 'components/Button';

// Utils
import { navigationMock } from 'utils/testMock';

// API
import { authService } from 'api/auth';

describe('SignIn Screen', () => {
  let tree: any;

  beforeEach(() => {
    tree = render(<SignInScreen navigation={navigationMock} />);
  });

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
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
