import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import HomeScreen from 'screens/Home';
import { navigationMock } from 'utils/testMock';

describe('Home Screen', () => {
  let tree: any;
  beforeEach(() => {
    tree = render(<HomeScreen navigation={navigationMock} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  test('Should renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Should render a Hello text', () => {
    const { getByText } = tree;
    expect(getByText('Hello')).toBeTruthy();
  });

  test('Should render a Welcome to Laza. text', () => {
    const { getByText } = tree;
    expect(getByText('Welcome to Laza.')).toBeTruthy();
  });
});
