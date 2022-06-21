import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import { product } from '__mocks__/dataMock/products';
import ProductCard from './index';

storiesOf('Product Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <ProductCard
      product={product}
      onPressProductCard={action('clicked')}
      onPressLikeProduct={action('clicked')}
    />
  ));
