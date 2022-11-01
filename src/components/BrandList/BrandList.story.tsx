import React from 'react'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import {StoryScreen, Story, UseCase} from '../../../storybook/views'

import BrandList from './index'

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
          onLoadMoreBrand={action('clicked')}
        />
      </UseCase>
    </Story>
  ))
