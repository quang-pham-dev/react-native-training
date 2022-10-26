import React from 'react'
import {TextInput} from 'react-native'
import {storiesOf} from '@storybook/react-native'

import {StoryScreen, Story, UseCase} from '../../../storybook/views'

import AnimatedKeyboard from './index'

declare let module: NodeModule

storiesOf('AnimatedKeyboard', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="default">
        <AnimatedKeyboard>
          <TextInput placeholder="Enter your Username" />
        </AnimatedKeyboard>
      </UseCase>
    </Story>
  ))
