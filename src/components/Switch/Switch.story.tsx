import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Components
import Switch from './index'

declare let module: NodeModule

storiesOf('Switch', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="Default">
        <Switch />
      </UseCase>
    </Story>
  ))
  .add('Disabled', () => (
    <Story>
      <UseCase text="Disabled">
        <Switch disabled value={false} />
      </UseCase>
    </Story>
  ))
