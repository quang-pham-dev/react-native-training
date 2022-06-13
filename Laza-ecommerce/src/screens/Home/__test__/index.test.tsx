import React from 'react';

// LIBS
import { cleanup, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Screen
import HomeScreen from 'screens/Home';

// Utils
import { navigationMock } from 'utils/testMock';

// Mocks
import { user } from '__mocks__/dataMock/user';

describe('Home Screen', () => {
  const helloText = 'Hello';
  const wellComeText = 'Welcome to Laza.';

  let tree: any;
  const props = {
    navigation: navigationMock,
    route: {
      params: {}
    },
    currentUser: user,
    username: user.username
  };
  beforeEach(() => {
    tree = renderer.create(<HomeScreen {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('Should renders correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Should render a Hello text', () => {
    const tree = render(<HomeScreen {...props} />);
    const { getByText } = tree;

    expect(getByText(helloText)).toBeTruthy();
  });

  test('Should render a Welcome to Laza. text', () => {
    const tree = render(<HomeScreen {...props} />);
    const { getByText } = tree;

    expect(getByText(wellComeText)).toBeTruthy();
  });
});
