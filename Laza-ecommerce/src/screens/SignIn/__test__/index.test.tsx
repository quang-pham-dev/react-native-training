import React from 'react';

// LIBS
import { render } from '@testing-library/react-native';

// Screen
import SignInScreen from 'screens/SignIn';

// Utils
import { navigationMock } from 'utils/testMock';

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
});
