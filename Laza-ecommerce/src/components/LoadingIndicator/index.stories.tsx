import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import LoadingIndicator from './index';

storiesOf('LoadingIndicator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Large size', () => <LoadingIndicator size='large' />)
  .add('Small size', () => <LoadingIndicator size='small' />);
