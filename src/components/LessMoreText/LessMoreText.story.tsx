import React from 'react'

// Storybook
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Components
import LessMoreText from './index'

declare let module: NodeModule
const longText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi adipisci? Ex laboriosam, accusantium cupiditate aperiam debitis omnis, fuga numquam iusto veniam perferendis voluptas cumque ipsum molestias eius commodi et'

storiesOf('Less More Text', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="default">
        <LessMoreText numberOfLines={2}>{longText}</LessMoreText>
      </UseCase>
    </Story>
  ))
