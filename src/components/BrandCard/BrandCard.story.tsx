import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'

import BrandCard from './index'

import {StoryScreen, Story, UseCase} from '../../../storybook/views'
import {brand} from '@constants/dataMock'

declare let module: NodeModule

storiesOf('Brand Card', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="default">
        <BrandCard brand={brand} onPressBrandCard={action('clicked')} />
      </UseCase>
    </Story>
  ))
