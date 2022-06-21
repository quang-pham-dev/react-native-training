import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import SearchBar from './index';

storiesOf('Search Bar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <SearchBar onSubmitEditing={action('clicked')} />);
