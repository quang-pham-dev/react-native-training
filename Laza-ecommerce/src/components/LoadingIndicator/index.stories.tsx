import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from 'storybook/stories/CenterView';
import LoadingIndicator from './index';

storiesOf('LoadingIndicator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('large size', () => <LoadingIndicator size='large' />)
  .add('small size', () => <LoadingIndicator size='small' />);
