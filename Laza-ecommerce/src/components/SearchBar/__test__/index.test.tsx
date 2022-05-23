import React from 'react';
import { render } from '@testing-library/react-native';

import SearchBar from 'components/SearchBar';

describe('Search Bar Component', () => {
  const component = render(<SearchBar onChangeText={jest.fn()} />);
  test('Should render correctly', () => {
    const result = component.toJSON();
    expect(result).toMatchSnapshot();
  });
});
