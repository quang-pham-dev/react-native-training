import React from 'react'

// StoryBook
import {storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {text} from '@storybook/addon-knobs'

// Components
import Input, {InputType} from './index'

// Themes
import {Icons} from '@themes'

declare let module: NodeModule

storiesOf('Input', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Type normal', () => (
    <Story>
      <UseCase text={'normal'}>
        <Input
          label={text('label', 'Username')}
          placeholder={text('placeholder', 'Enter your username')}
          icon={Icons.filledProfile}
          value={''}
          type={InputType.NORMAL}
          onChange={action('onChange text')}
        />
      </UseCase>
    </Story>
  ))
  .add('Type password', () => (
    <Story>
      <UseCase text={'password'}>
        <Input
          label={text('label', 'Password')}
          placeholder={text('placeholder', 'Enter your password')}
          value={''}
          type={InputType.PASSWORD}
          onChange={action('onChange text')}
        />
      </UseCase>
    </Story>
  ))
