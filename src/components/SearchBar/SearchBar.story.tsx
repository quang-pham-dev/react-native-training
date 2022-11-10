import React from 'react'

// Storybook
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Components
import SearchBar from './index'

declare let module: NodeModule

storiesOf('Search Bar', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Normal', () => (
    <Story>
      <UseCase text={'normal'}>
        <SearchBar onSubmitEditing={action('clicked')} />
      </UseCase>
    </Story>
  ))
