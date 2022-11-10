import React from 'react'

// StoryBook
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

// Components
import BrandList from './index'

// Constants
import {brands} from '@constants/dataMock'

declare let module: NodeModule

storiesOf('Brand List', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase text="default">
        <BrandList
          brands={brands}
          onPressBrandCard={action('clicked')}
          onLoadMoreBrands={action('clicked')}
        />
      </UseCase>
    </Story>
  ))
