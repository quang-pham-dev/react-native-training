import React from 'react';
import { TextInput } from 'react-native';

// LIBS
import { waitFor } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

// Components
import Input from 'components/TextInput';

describe('TextInput Component', () => {
  const props = {
    value: 'user name',
    labelStyle: {},
    placeholder: 'Enter your user name',
    textInputStyles: {},
    secureTextEntry: false,
    autoFocus: false,
    onChangeText: jest.fn(),
    onSubmitEditing: jest.fn(),
    onBlur: jest.fn()
  };

  const onChangeText = jest.fn();
  const tree = renderer.create(<Input {...props} />);
  test('should render correctly', () => {
    const component = tree.toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render with label correctly', () => {
    const newProps = {
      ...props,
      label: 'Username'
    };
    const tree = renderer.create(<Input {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render placeholder', () => {
    const newProps = {
      ...props,
      placeholder: 'Enter your username'
    };
    const tree = renderer.create(<Input {...newProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call function onChangeText', async () => {
    const component = tree.root.findAllByType(TextInput)[0];
    await waitFor(() => component.props.onChangeText());
    expect(props.onChangeText).toHaveBeenCalled();
  });

  test('should call function onSubmitEditing', () => {
    const component = tree.root.findAllByType(TextInput)[0];
    component.props.onSubmitEditing();
    expect(props.onSubmitEditing).toHaveBeenCalled();
  });

  test('should call function onBlur', () => {
    const component = tree.root.findAllByType(TextInput)[0];
    component.props.onBlur();
    expect(props.onBlur).toHaveBeenCalled();
  });
});
