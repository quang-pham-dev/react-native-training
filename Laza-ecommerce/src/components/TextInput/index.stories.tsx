import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { storiesOf } from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import Colors from 'themes/Colors';
import TextInput from './index';

const PasswordTextInput = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = (): void => setShowPassword(previousState => !previousState);

  return (
    <TextInput
      value={''}
      onChangeText={() => {}}
      textInputStyles={{ width: '100%', height: 50 }}
      label='Password'
      labelStyle={{ color: Colors.textGray }}
      secureTextEntry={showPassword}
      placeholder='Enter your password'
      testID='passwordInput'
      icon={
        <Pressable onPress={handleShowPassword}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color={Colors.textGray} />
        </Pressable>
      }
    />
  );
};

storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Username', () => (
    <TextInput
      textInputStyles={{ width: '100%', height: 50 }}
      label='Username'
      labelStyle={{ color: Colors.textGray }}
      placeholder='Enter your username'
      icon={<Feather name='user' size={20} color={Colors.textGray} />}
      value={''}
      onChangeText={() => {}}
    />
  ))
  .add('Password', () => <PasswordTextInput />);
