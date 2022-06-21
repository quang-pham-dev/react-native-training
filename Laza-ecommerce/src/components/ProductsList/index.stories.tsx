import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import ProductsList from './index';
import { products } from '__mocks__/dataMock/products';

storiesOf('Product List', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <ProductsList
      products={products}
      onPressLikeProduct={action('clicked')}
      onPressProductCard={action('clicked')}
      onLoadMoreProducts={action('clicked')}
    />
  ));
