import React from 'react';
import { Image, Text } from 'react-native';

// LIBS
import renderer from 'react-test-renderer';

// Components
import Title from 'components/Title';
import Reviews from 'screens/ProductDetail/components/Reviews';

// Mock data
import { product } from '__mocks__/dataMock';

// API
import { productsService } from 'api/products.api';

describe('Product detail reviewer review', () => {
  const props = {
    comment: product.comment,
    rating: product.rating,
    name: product?.reviewers?.name,
    image: product?.reviewers?.image,
    date: product?.reviewers?.date,
  };

  const tree = renderer.create(<Reviews {...props} />);

  test('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should render product reviews', async () => {
    let resProduct = await productsService.getProductById(product.id);

    const renderReviews = renderer.create(
      <Reviews
        comment={resProduct.data.comment}
        rating={resProduct.data.rating}
        reviewers={resProduct.data.reviewers}
      />,
    );

    expect(renderReviews).toBeTruthy();
  });
});
