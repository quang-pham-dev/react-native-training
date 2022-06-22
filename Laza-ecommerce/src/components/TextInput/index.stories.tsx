import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import Colors from 'themes/Colors';
import TextInput from './index';

storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Username', () => (
    <TextInput
      label='Username'
      labelStyle={{ color: Colors.textGray }}
      placeholder='Enter your username'
      iconRight={<Feather name='user' size={20} color={Colors.textGray} />}
      value={''}
      type='text'
      onChangeText={() => {}}
    />
  ))
  .add('Password', () => (
    <TextInput
      value={''}
      onChangeText={() => {}}
      label='Password'
      labelStyle={{ color: Colors.textGray }}
      placeholder='Enter your password'
      testID='passwordInput'
      type='password'
    />
  ));
