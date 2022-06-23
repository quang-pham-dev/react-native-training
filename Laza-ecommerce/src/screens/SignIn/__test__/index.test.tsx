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
});
