import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Switch from 'components/Switch';

describe('Switch Component', () => {
  const tree = renderer.create(<Switch />);
  test('Should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });
});
