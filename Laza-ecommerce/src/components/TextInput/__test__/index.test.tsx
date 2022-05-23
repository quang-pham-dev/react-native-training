import React from 'react';
import renderer from 'react-test-renderer';

import Input from 'components/TextInput';

describe('TextInput Component', () => {
  const onChangeText = jest.fn();
  const component = renderer.create(<Input value='username' onChangeText={onChangeText} />);
  test('should render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with label', () => {
    const tree = renderer
      .create(<Input value='username' label='Username' onChangeText={onChangeText} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render placeholder', () => {
    const tree = renderer
      .create(
        <Input value='Password' placeholder='Enter your password' onChangeText={onChangeText} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
