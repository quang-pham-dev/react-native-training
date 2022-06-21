import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import BrandCard from './index';
import { brand } from '__mocks__/dataMock/brands';

storiesOf('Brand Card', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <BrandCard brand={brand} onPressBrandCard={action('clicked')} />);
