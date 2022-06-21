import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import BrandCardList from './index';
import { brands } from '__mocks__/dataMock/brands';

storiesOf('Brand List', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <BrandCardList
      brands={brands}
      onPressBrandCard={action('clicked')}
      onLoadMoreBrands={action('clicked')}
    />
  ));
