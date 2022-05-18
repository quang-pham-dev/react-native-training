import { render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from 'screens/Home';

describe('Home Screen', () => {
  let navigation: any;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
      toggleDrawer: jest.fn(),
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    const component = render(<HomeScreen navigation={navigation} />);
    expect(component).toMatchSnapshot();
  });
});
