import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import Switch from './index';

storiesOf('Switch', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Switch />)
  .add('With False Value', () => <Switch value={false} />);
