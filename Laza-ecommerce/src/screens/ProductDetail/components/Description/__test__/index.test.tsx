import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Description from 'screens/ProductDetail/components/Description';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail Description', () => {
  const tree = renderer.create(<Description description={product.description} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
