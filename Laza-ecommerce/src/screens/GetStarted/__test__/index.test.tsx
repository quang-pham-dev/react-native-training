import React from 'react';

// LIBS
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screens
import GetStartedScreen from 'screens/GetStarted';

// Components
import Button from 'components/Button';

// Utils
import { navigationMock } from 'utils/testMock';

// Constants
import { SCREENS_ROUTES } from 'constants/Screens';

describe('GetStarted Screen', () => {
  let tree: any;
  const action = 'press';

  const TitleText = 'Let’s Get Started';
  const createAnAccountText = 'Create an Account';
  const facebookButtonText = 'Facebook';
  const twitterButtonText = 'Twitter';
  const googleButtonText = 'Google';

  const LinkToSignInTestID = 'LinkToSignIn';

  beforeEach(() => {
    tree = render(<GetStartedScreen navigation={navigationMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render Title Text', () => {
    const { getByText } = tree;
    expect(getByText(TitleText)).toBeTruthy();
  });

  test('should render three social button', () => {
    const { getByText } = tree;

    const facebookButton = getByText(facebookButtonText);
    const twitterButton = getByText(twitterButtonText);
    const googleButton = getByText(googleButtonText);

    expect(facebookButton).toBeTruthy();
    expect(twitterButton).toBeTruthy();
    expect(googleButton).toBeTruthy();
  });

  test('should render button create an account', () => {
    const { getByText } = tree;
    const createAccountButton = getByText(createAnAccountText);

    expect(createAccountButton).toBeTruthy();
  });

  test('should navigate to SignIn Screen', () => {
    const { getByTestId } = tree;
    const link = getByTestId(LinkToSignInTestID);

    fireEvent(link, action);

    expect(navigationMock.navigate).toHaveBeenCalledWith(
      SCREENS_ROUTES.AUTH_STACK.SIGN_IN_SCREEN.name
    );
  });

  test('should handle back button', () => {
    const tree = renderer.create(<GetStartedScreen navigation={navigationMock} />);
    const backButton = tree.root.findAllByType(Button.type)[0];
    backButton.props.onPress();
    expect(navigationMock.goBack).toHaveBeenCalled();
  });
});
