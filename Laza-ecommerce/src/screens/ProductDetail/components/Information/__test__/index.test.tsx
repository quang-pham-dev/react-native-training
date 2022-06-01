import React from 'react';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Information from 'screens/ProductDetail/components/Information';

// Mock data
import { product } from '__mocks__/dataMock';

describe('Product detail information', () => {
  const props = {
    title: product.title,
    type: product.type,
    price: product.price,
  };

  const tree = renderer.create(<Information {...props} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
