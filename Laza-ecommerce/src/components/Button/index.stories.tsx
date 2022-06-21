import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../../../storybook/stories/CenterView';
import Colors from 'themes/Colors';
import IMAGES from 'themes/Images';
import Button from './index';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Circle type ', () => (
    <Button onPress={action('clicked')} type='Circle' icon={IMAGES.iconMenu} />
  ))
  .add('Bottom type ', () => <Button text='Login' onPress={action('clicked')} type='Bottom' />)
  .add('Social type ', () => (
    <Button
      text='Google'
      onPress={action('clicked')}
      icon={IMAGES.iconGoogle}
      type='Social'
      backgroundColor={Colors.google}
    />
  ));
