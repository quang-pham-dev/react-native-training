import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import DrawerItem from './index';
import CenterView from '../../../../storybook/stories/CenterView';
import IMAGES from 'themes/Images';

storiesOf('Menu item', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <DrawerItem title='Wish List' source={IMAGES.iconHeartDrawer} />);
