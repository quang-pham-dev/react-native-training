import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../../storybook/stories/CenterView';
import Header from './index';

storiesOf('Layout Header', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Header
      navigation={{
        dispatch: action('clicked')
      }}
    />
  ));
