import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Screen
import DummyScreen from 'screens/Dummy/Dummy';

describe('Dummy Screen', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<DummyScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
